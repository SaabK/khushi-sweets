import React from "react";
import subtract from "../../../assets/subtract.svg";
import add from "../../../assets/Add.svg";
import Image from "next/image";

interface QuantityProps {
    quantity: number;
}

export default function Quantity({ quantity }: QuantityProps) {
    return (
        <div className="quantity">
            <button>
                <Image src={subtract} alt="" fill />
            </button>

            <span>{quantity}</span>

            <button>
                <Image src={add} alt="" fill />
            </button>
        </div>
    );
}
