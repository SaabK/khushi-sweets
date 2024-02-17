import React from "react";
import { Montagu_Slab } from "next/font/google";

const montaguSlab = Montagu_Slab({ subsets: ["latin"] });

interface HeadingProps {
    text: string;
    className?: string;
}

export default function Heading({ text, className }: HeadingProps) {
    return (
        <h2 className={`${montaguSlab.className} ${className} heading`}>
            {text}
        </h2>
    );
}
