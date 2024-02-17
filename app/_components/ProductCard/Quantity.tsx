import React from "react";
import subtract from "../../assets/subtract.svg";
import add from "../../assets/Add.svg";
import Image from "next/image";

export default function Quantity() {
    return (
        <div className="quantity">
            <button>
                <Image src={subtract} alt="" width={32} height={32} />
            </button>

            <span>1</span>

            <button>
                <Image src={add} alt="" width={32} height={32} />
            </button>
        </div>
    );
}
