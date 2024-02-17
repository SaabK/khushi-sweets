import React from "react";
import ProductCard from "../ProductCard";
import Heading from "../Heading";
import { products } from "@/lib/data";
import { Product } from "@/lib/types";

export default function Products() {
    return (
        <section className="background products-section">
            <div className="container">
                <Heading text="Products" />

                <div className="products">
                    {products.map((product: Product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
