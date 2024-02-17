import React from "react";
import Image from "next/image";
import subtract from "../../assets/subtract.svg";
import add from "../../assets/Add.svg";
import Heading from "../Heading";

function Hero() {
    return (
        <section className="background hero ">
            <div className="container">
                <article className="featuredProduct">
                    <div>
                        <Image
                            src="/barfi.jpg"
                            alt="Khushi ki Barfi"
                            width={430}
                            height={430}
                            className="featuredProduct__image"
                        />
                    </div>

                    <div className="featuredProduct__right">
                        <Heading text="Khoya Barfi" />
                        <span className="price">Rs. 1,100</span>

                        <span className="label">Weight</span>

                        <div className="weight">
                            <button className="btn btn-secondary">
                                1/2 KG
                            </button>
                            <button className="btn btn-primary">1 KG</button>
                        </div>

                        <span className="label">Quantity</span>

                        <div className="quantity">
                            <button>
                                <Image
                                    src={subtract}
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </button>

                            <span>1</span>

                            <button>
                                <Image
                                    src={add}
                                    alt=""
                                    width={32}
                                    height={32}
                                />
                            </button>
                        </div>

                        <div className="options">
                            <button className="btn btn-primary">
                                Add to cart
                            </button>
                            <button className="btn btn-secondary">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Hero;
