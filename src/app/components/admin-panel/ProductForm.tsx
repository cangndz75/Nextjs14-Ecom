"use client"
import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hooks';
import { UploadButton } from '@/utils/uploadthing';
import axios from 'axios';
import Image from 'next/image';
import React, { FormEvent, useState } from 'react';

export interface IPayload {
    imgSrc: null | string;
    fileKey: null | string;
    name: string;
    price: string;
    category: string;
}

const ProductForm = () => {
    const [payload, setPayload] = useState<IPayload>({
        imgSrc: null,
        fileKey: null,
        name: "",
        price: "",
        category: "",
    })
    const dispatch = useAppDispatch()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setLoading(true))

        axios.post("/api/add_product", payload)
            .then(res => {
                console.log(res);
                setPayload({
                    imgSrc: null,
                    fileKey: null,
                    name: "",
                    price: "",
                    category: "",
                })
            })
            .catch((err) => console.log(err))
            .finally(() => dispatch(setLoading(false)))
    };
    
    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <Image
                className='max-h-[300px] w-auto object-contain rounded-md'
                src={payload.imgSrc ? payload.imgSrc : "/placeholder.png"}
                width={800}
                height={500}
                alt='ürün_fotoğrafı'
            />

            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    console.log("Files: ", res);

                    setPayload({
                        ...payload,
                        imgSrc: res[0]?.url,
                        fileKey: res[0]?.key,
                    });
                    alert("Yükleme başarılıyla tamamlandı!");
                }}
                onUploadError={(error: Error) => {
                    alert(`ERROR! ${error.message}`);
                }}
            />

            <div>
                <label className='block ml-1'>Ürün Adı</label>
                <input className='bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md'
                    type='text'
                    value={payload.name}
                    onChange={(e) => setPayload({ ...payload, name: e.target.value })}
                    required
                />
            </div>

            <div>
                <label className='block ml-1'>Ürün Kategorisi</label>
                <input className='bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md'
                    type='text'
                    value={payload.category}
                    onChange={(e) => setPayload({ ...payload, category: e.target.value })}
                    required
                />
            </div>

            <div>
                <label className='block ml-1'>Ürün Fiyatı</label>
                <input className='bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md'
                    type='text'
                    value={payload.price}
                    onChange={(e) => setPayload({ ...payload, price: e.target.value })}
                    required
                />
            </div>

            <div className='flex justify-end'>
                <button className='bg-pink text-white px-8 rounded-md'>Ekle</button>
            </div>
        </form>
    )
}

export default ProductForm;