import { Testimonial } from "@/lib/types";
import Image from "next/image";
import React from "react";

export default function Testimonial({
    testimonial,
}: {
    testimonial: Testimonial;
}) {
    return (
        <div className="testimonial">
            <div className="image">
                <Image src={testimonial.image} alt={testimonial.name} fill />
            </div>
            <p>{testimonial.text}</p>
            <span className="name"> — {testimonial.name}</span>
        </div>
    );
}
