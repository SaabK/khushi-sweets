import React from "react";
import ProductCard from "../ProductCard";
import Heading from "../Heading";
import { Product } from "@/lib/types";
import axios from "axios";
import { baseUrl } from "@/lib/data";

async function getProducts() {
    const res = await axios.get(`${baseUrl}/api/products`);
    return res.data;
}

export default async function Products() {
    const products = await getProducts();

    return (
        <section className="background products-section">
            <div className="container">
                <Heading text="Products" />

                <div className="products">
                    {products.map((product: Product, index: number) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
