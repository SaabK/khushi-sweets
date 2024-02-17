"use client";
import React from "react";
import { ReactSVG } from "react-svg";

interface SVGIconProps {
    icon: string;
}

export default function SVGIcon({ icon }: SVGIconProps) {
    return <ReactSVG src={icon} className="icon" />;
}
