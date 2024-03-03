"use client";

import Image from "next/image";
import React from "react";
import subtract from "../../assets/subtract.svg";
import add from "../../assets/Add.svg";
import Options from "../ProductCard/Options";
import { Product } from "@/lib/types";
import { useState } from "react";

interface QuantityOptions {
    item: Product;
}

export default function QuantityOptions({ item }: QuantityOptions) {
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <div className="quantity">
                <button
                    onClick={() => {
                        if (quantity == 1) return;
                        setQuantity((prev) => prev - 1);
                    }}
                >
                    <Image src={subtract} alt="" width={32} height={32} />
                </button>

                <span>{quantity}</span>

                <button onClick={() => setQuantity((prev) => prev + 1)}>
                    <Image src={add} alt="" width={32} height={32} />
                </button>
            </div>

            <Options item={item} quantity={quantity} />
        </>
    );
}
