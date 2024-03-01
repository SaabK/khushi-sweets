import { ICartItem } from "@/lib/types";
import Image from "next/image";
import React from "react";
import Quantity from "./Quantity";
import { montaguSlab } from "@/lib/fonts";
import { Trash2 } from "lucide-react";

interface CartItemProps {
    item: ICartItem;
}

export default function CartItem({ item }: CartItemProps) {
    return (
        <article className="cart-item">
            <div className="image">
                <Image src={item.image} alt={item.name} fill />
            </div>

            <div className="right">
                <div>
                    <h3 className={`${montaguSlab.className} h3`}>
                        {item.name}
                    </h3>

                    <Trash2 className="trash" />
                </div>
                <div>
                    <p className="price">Rs. {item.price}</p>
                    <button className={`${montaguSlab.className} tag round`}>
                        {item.weight} KGS
                    </button>
                </div>
                <Quantity quantity={item.quantity} />
            </div>
        </article>
    );
}
