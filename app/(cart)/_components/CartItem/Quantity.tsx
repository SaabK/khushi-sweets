"use client";

import React from "react";
import subtract from "../../../assets/subtract.svg";
import add from "../../../assets/Add.svg";
import Image from "next/image";
import { useAppDispatch } from "@/lib/hooks";
import {
    decrementQuantity,
    deleteItem,
    incrementQuantity,
} from "@/lib/features/cart/cartSlice";

interface QuantityProps {
    quantity?: number;
    id: string;
}

export default function Quantity({ quantity = 1, id }: QuantityProps) {
    const dispatch = useAppDispatch();

    return (
        <div className="quantity">
            <button
                onClick={() => {
                    if (quantity == 1) dispatch(deleteItem({ id }));
                    dispatch(decrementQuantity({ id }));
                }}
            >
                <Image src={subtract} alt="" fill />
            </button>

            <span>{quantity}</span>

            <button onClick={() => dispatch(incrementQuantity({ id }))}>
                <Image src={add} alt="" fill />
            </button>
        </div>
    );
}
