import { montaguSlab } from "@/lib/fonts";
import React from "react";

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
