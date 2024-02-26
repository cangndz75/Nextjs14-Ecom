import { connectMongoDB } from "@/app/libs/MongoConnect";
import Product from "@/app/libs/models/Products";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, URLParams: any) {
    try {
        const id = URLParams.params.id
        await connectMongoDB()
        const data = await Product.findByIdAndDelete(id)

        return NextResponse.json({ msg: "Ürün başarıyla silindi!", data });
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