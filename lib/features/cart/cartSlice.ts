import { CartState } from "@/lib/types";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: CartState = {
    items:
        (typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("cart") as string)) ||
        [],
    amount: 0,
    total: 0,
};

function saveInLocalStorage(state: CartState) {
    typeof window !== "undefined" &&
        localStorage.setItem("cart", JSON.stringify(state.items));
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, { payload: { item, quantity = 1 } }) => {
            const thatOneItem = state.items.find(
                (stateItem) => stateItem._id === item._id
            );

            if (thatOneItem) {
                thatOneItem.quantity++;
                console.log("the item already exists: ", current(state.items));
            } else {
                state.items.push({ ...item, quantity });
            }

            // console.log(current(state.items));

            saveInLocalStorage(state);
        },
        incrementQuantity: (
            state,
            { payload: { id } }: { payload: { id: string } }
        ) => {
            const item = state.items.find((item) => item._id === id);
            if (item) {
                item.quantity++;
            }

            saveInLocalStorage(state);
        },
        decrementQuantity: (
            state,
            { payload: { id } }: { payload: { id: string } }
        ) => {
            const item = state.items.find((item) => item._id === id);

            // Directly run deleteItem() in the component if quantity is 1

            // if (item?.quantity === 1) {
            //     return;
            // }

            if (item) {
                item.quantity--;
            }

            saveInLocalStorage(state);
        },
        deleteItem: (
            state,
            { payload: { id } }: { payload: { id: string } }
        ) => {
            state.items = state.items.filter((item) => item._id !== id);

            saveInLocalStorage(state);
        },
        calculateTotals: (state) => {
            state.total = state.items.reduce(
                (total, currentVal) => (total += currentVal.quantity),
                0
            );

            state.amount = state.items.reduce(
                (total, currentVal) => total + currentVal.quantity,
                0
            );
        },
    },
});

export const {
    addItem,
    decrementQuantity,
    incrementQuantity,
    deleteItem,
    calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
