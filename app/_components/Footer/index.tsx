import { socials } from "@/lib/data";
import { Social } from "@/lib/types";
import Image from "next/image";
import React from "react";
import SVGIcon from "../SVGIcon";

export default function Footer() {
    return (
        <footer className="flex-f">
            <div className="image">
                <Image
                    src="/khushi sweets logo white.png"
                    alt="Khushi Sweets"
                    fill
                />
            </div>

            <ul role="list">
                {socials.map((social: Social, index) => (
                    <li key={index}>
                        <a href={social.href} className="image" target="_blank">
                            <SVGIcon icon={social.icon} />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
