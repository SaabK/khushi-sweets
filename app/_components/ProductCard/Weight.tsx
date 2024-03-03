"use client";

import React, { useState } from "react";

export default function Weight() {
    // State to track the active weight
    const [activeWeight, setActiveWeight] = useState("1 KG");

    const handleClick = (weight: string) => {
        setActiveWeight(weight);
    };

    return (
        <div className="weight">
            <button
                className={`btn ${
                    activeWeight === "1/2 KG" ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => handleClick("1/2 KG")}
            >
                1/2 KG
            </button>
            <button
                className={`btn ${
                    activeWeight === "1 KG" ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => handleClick("1 KG")}
            >
                1 KG
            </button>
        </div>
    );
}
