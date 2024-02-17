import React from "react";
import Heading from "../Heading";
import { testimonials } from "@/lib/data";
import Testimonial from "./Testimonial";

export default function Testimonials() {
    return (
        <section className="testimonials-section background">
            <div className="container">
                <Heading text="What Our Customers Say" />

                <div className="testimonials">
                    {testimonials.map((testimonial, index) => (
                        <Testimonial testimonial={testimonial} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
