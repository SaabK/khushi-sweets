import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/lib/connectToMongo";
import Product from "@/models/Product";

export async function GET() {
    try {
        await connectMongo();
        const products = await Product.find();

        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
