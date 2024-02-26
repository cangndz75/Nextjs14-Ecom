import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    const {data:session} = useSession();
    return (
        <div className='py-3 px-4 bg-white flex justify-between items-center'>
            <h2>Gündüz Ticaret Yönetici Paneli</h2>
            <Image 
                src={session?.user?.image!} 
                alt='logo' 
                className='rounded-full cursor-pointer' 
                height={40} 
                width={40} 
                onClick={() => signOut()}
                />
        </div>
    )
}

export default Navbar