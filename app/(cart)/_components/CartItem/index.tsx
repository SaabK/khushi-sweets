"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Quantity from "./Quantity";
import { montaguSlab } from "@/lib/fonts";
import { Trash2 } from "lucide-react";
import axios from "axios";
import { baseUrl } from "@/lib/data";
import { Product } from "@/lib/types";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { deleteItem } from "@/lib/features/cart/cartSlice";

interface CartItemProps {
    id: string;
}

export default function CartItem({ id }: CartItemProps) {
    const [item, setItem] = useState<Product>();
    const { items } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    const quantity = items.find((item) => item._id === id)?.quantity;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${baseUrl}/api/products/${id}`
                );
                // console.log("From useEffect(): ", response.data);
                setItem(await response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = () => {
        dispatch(deleteItem({ id }));
    };

    return (
        <article className="cart-item">
            <div className="image">
                <Image
                    src={item?.image as string}
                    alt={item?.name as string}
                    fill
                />
            </div>

            <div className="right">
                <div>
                    <h3 className={`${montaguSlab.className} h3`}>
                        {item?.name}
                    </h3>

                    <Trash2 className="trash" onClick={handleDelete} />
                </div>
                <div>
                    <p className="price">Rs. {item?.price}</p>
                    <button className={`${montaguSlab.className} tag round`}>
                        {(item?.weight as number) / 1000} KGS
                    </button>
                </div>
                {/* TODO: change the 1 to the state from quantity */}
                <Quantity quantity={quantity} id={item?._id as string} />
            </div>
        </article>
    );
}
