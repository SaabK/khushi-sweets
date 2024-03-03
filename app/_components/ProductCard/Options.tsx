"use client";

import React from "react";
import { useAppDispatch } from "@/lib/hooks";
import { addItem } from "@/lib/features/cart/cartSlice";
import { Product } from "@/lib/types";

interface OptionsProps {
    item: Product;
    quantity?: number;
}

export default function Options({ item, quantity }: OptionsProps) {
    const dispatch = useAppDispatch();

    return (
        <div className="options">
            <button
                className="btn btn-secondary"
                onClick={() => dispatch(addItem({ item, quantity }))}
            >
                Add to cart
            </button>
            <button className="btn btn-primary">Buy Now</button>
        </div>
    );
}
