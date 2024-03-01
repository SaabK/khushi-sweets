import { CartState } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
    items: [],
    amount: 0,
    total: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = cartSlice.actions;

export default cartSlice.reducer;
