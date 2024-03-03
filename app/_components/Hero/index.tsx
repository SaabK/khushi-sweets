import React from "react";
import Image from "next/image";

import Heading from "../Heading";
import { baseUrl } from "@/lib/data";
import axios from "axios";
import { Product } from "@/lib/types";
import QuantityOptions from "./QuantityOptions";

async function getFeaturedProduct() {
    const res = await axios.get(`${baseUrl}/api/products/featured`);
    console.log(res.data);

    return res.data;
}

async function Hero() {
    const product: Product = await getFeaturedProduct();

    return (
        <section className="background hero ">
            <div className="container">
                <article className="featuredProduct">
                    <div className="image">
                        <Image
                            src={product.image}
                            alt="Khushi ki Barfi"
                            fill
                            className="featuredProduct__image"
                        />
                    </div>

                    <div className="featuredProduct__right">
                        <Heading text={product.name} />
                        <span className="price">
                            Rs. {product.price.toLocaleString("en-IN")}
                        </span>

                        <span className="label">Weight</span>

                        <div className="weight">
                            <button className="btn btn-secondary">
                                1/2 KG
                            </button>
                            <button className="btn btn-primary">1 KG</button>
                        </div>

                        <span className="label">Quantity</span>
                        <QuantityOptions item={product} />
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Hero;
