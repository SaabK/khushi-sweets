import Image from "next/image";
import React from "react";
import shoppingCart from "../../assets/Shopping Cart.svg";
import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <div className="container flex-f">
                <div className={`shoppingCart hidden`}>
                    <Image src={shoppingCart} alt="" width={30} height={30} />
                </div>

                <div className={`logo image`}>
                    <Link href="/">
                        <Image
                            src="/khushi sweets logo urdu.png"
                            alt="Khushi Sweets"
                            fill
                        />
                    </Link>
                </div>

                <div className={`shoppingCart`}>
                    <Link href="/cart">
                        <Image
                            src={shoppingCart}
                            alt=""
                            width={30}
                            height={30}
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
}
