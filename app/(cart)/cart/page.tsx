import Heading from "@/app/_components/Heading";
import { cart } from "@/lib/data";
import React from "react";
import CartItem from "../_components/CartItem";

export default function CartPage() {
    return (
        <section className="cart-section background">
            <div className="container">
                <Heading text="Your Cart" className="space-top" />

                <div className="cart">
                    <div className="cart-items">
                        {cart.map((item, index) => (
                            <CartItem key={index} item={item} />
                        ))}
                    </div>

                    <div className="checkout">
                        <h3>Checkout</h3>

                        <hr />

                        <div>
                            <p>
                                <span>Subtotal</span>
                                <span>Rs. 9999</span>
                            </p>
                            <p>
                                <span>Delivery</span>
                                <span>Rs. 1</span>
                            </p>
                        </div>

                        <hr />

                        <p>
                            <span>Total</span>
                            <span>Rs. 10,000</span>
                        </p>

                        <button className="btn btn-primary">Checkout</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
