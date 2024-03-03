import { montaguSlab } from "@/lib/fonts";
import { Product } from "@/lib/types";
import Image from "next/image";
import React from "react";
import Weight from "./Weight";
import Options from "./Options";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <article className="product">
            <div className="image">
                <Image src={product.image} alt={product.name} fill />
            </div>
            <h3 className={`${montaguSlab.className}`}>{product.name}</h3>
            <span className="price">
                Rs. {product.price.toLocaleString("en-US")}
            </span>

            <Weight />
            <Options item={product} />
        </article>
    );
}
