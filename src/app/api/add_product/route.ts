import { connectMongoDB } from "@/app/libs/MongoConnect";
import Product from "@/app/libs/models/Products";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { imgSrc, fileKey, name, category, price } = body;
        await connectMongoDB()
        const data = await Product.create({
            imgSrc, fileKey, name, category, price
        })

        return NextResponse.json({ msg: "Ürün başarıyla eklendi!", data });
    } catch (error) {
        return NextResponse.json(
            {
                error,
                msg: "Bir şeyler yanlış gitti!"
            },
            { status: 400 }
        );
    }
}