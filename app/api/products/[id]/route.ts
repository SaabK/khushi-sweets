import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/lib/connectToMongo";
import Product from "@/models/Product";

export async function GET(req: any) {
    const { pathname } = new URL(req.url);
    const id = pathname.split("/")[3];
    // const id = "65e1a83cfc88088ac6059426";

    try {
        await connectMongo();
        const product = await Product.findById(id);

        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
