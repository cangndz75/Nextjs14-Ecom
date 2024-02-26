import React from 'react'

const Hero = () => {
    return (
        <div className='bg-[#E3EDF6] mt-4'>
            <div className='container grid md:grid-cols-2 py-8'>
                <div className='flex items-center'>
                    <div className='max-w-[450px] space-y-4'>
                        <p className='text-topHeadingSecondary'>
                            <span className='font-bold'>1000 TL'den</span> başlayan fiyatlarla...
                        </p>
                        <h1 className='text-topHeadingPrimary font-bold text-4xl md:text-5xl'>En iyi tablet modelleri</h1>
                        <h2 className="text-2xl font-['Oregano',cursive]">Gündüz Ticaret</h2>
                        <a className='inline-block bg-white rounded-md px-6 py-3 hover:bg-accent hover:text-white' href="#">
                            Sepete Ekle
                        </a>
                    </div>
                </div>
                <div>
                    <img className='ml-auto' src='/hero.png' alt='hero' />
                </div>
            </div>
        </div>
    )
}

export default Hero