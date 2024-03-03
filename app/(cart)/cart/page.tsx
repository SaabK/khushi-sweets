import Heading from "@/app/_components/Heading";
import React from "react";
import Checkout from "../_components/Checkout";
import CartItems from "../_components/CartItems";

export default function CartPage() {
    return (
        <section className="cart-section background">
            <div className="container">
                <Heading text="Your Cart" className="space-top" />

                <div className="cart">
                    <CartItems />

                    <Checkout />
                </div>
            </div>
        </section>
    );
}
