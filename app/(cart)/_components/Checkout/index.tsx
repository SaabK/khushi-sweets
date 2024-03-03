import React from "react";

export default function Checkout() {
    return (
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
    );
}
