"use client";

import React from "react";
import CartItem from "../CartItem";

import { useAppSelector } from "@/lib/hooks";

export default function CartItems() {
    const { items, total } = useAppSelector((state) => state.cart);

    return (
        <div className="cart-items">
            {items.map((item, index) => (
                <CartItem key={index} id={item._id} />
            ))}

            <hr />
            <span className="total">{total.toLocaleString("en-US")}</span>
        </div>
    );
}
