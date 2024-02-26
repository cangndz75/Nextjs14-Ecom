import React from 'react'
import { MdSupportAgent } from 'react-icons/md'
import { RiRefund2Fill } from 'react-icons/ri'
import { TbDiscount2, TbTruckDelivery } from 'react-icons/tb'
import FeatureCard from './FeatureCard'

const data = [
    {
        icon:<TbTruckDelivery className='text-4xl'/>,
        title:"Ücretsiz Teslimat",
        desc:"500 TL ve üzeri alışverişlerde ",
    },
    {
        icon:<RiRefund2Fill className='text-4xl'/>,
        title:"Gündüz Ticaret Güvencesi",
        desc:"İade garantili alış veriş",
    },{
        icon:<TbDiscount2 className='text-4xl'/>,
        title:"Kişiye Özel İndirimler",
        desc:"Yeni üyelere 500 TL indirim",
    },{
        icon:<MdSupportAgent className='text-4xl'/>,
        title:"7/24 Canlı Destek",
        desc:"Tüm sorularınıza 24 saat içinde geri dönüş",
    },

]

const Feature = () => {
    return (
        <div className='container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8'>
            {data.map((item) => (
                <FeatureCard
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                />
            ))}
        </div>
    )
}

export default Feature