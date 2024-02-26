import { connectMongoDB } from "@/app/libs/MongoConnect";
import Product from "@/app/libs/models/Products";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, URLParams:any) {
    try {
        const body = await request.json()
        const id= URLParams.params.id
        const { name, category, price } = body;
        await connectMongoDB()
        const data = await Product.findByIdAndUpdate(id,{
            name, category, price
        })

        return NextResponse.json({ msg: "Ürün başarıyla güncellendi!", data });
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