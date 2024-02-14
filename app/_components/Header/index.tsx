import Image from "next/image";
import React from "react";
import styles from "./Header.module.css";
import shoppingCart from "../../assets/Shopping Cart.svg";

export default function Header() {
    return (
        <header className={`${styles.header}`}>
            <div className="container flex-f">
                <div className={`${styles.shoppingCart} hidden`}>
                    <Image src={shoppingCart} alt="" width={30} height={30} />
                </div>

                <div className={`logo`}>
                    <Image
                        src="/khushi sweets logo urdu.png"
                        alt="Khushi Sweets"
                        width={300}
                        height={70}
                    />
                </div>

                <div className={`${styles.shoppingCart}`}>
                    <Image src={shoppingCart} alt="" width={30} height={30} />
                </div>
            </div>
        </header>
    );
}
