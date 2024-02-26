import { connectMongoDB } from "@/app/libs/MongoConnect";
import Product from "@/app/libs/models/Products";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        await connectMongoDB()
        const data = await Product.find();

        return NextResponse.json(data);
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