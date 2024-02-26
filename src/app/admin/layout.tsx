"use client"
import React from 'react'
import Sidebar from '../components/admin-panel/Sidebar'
import Navbar from '../components/admin-panel/Navbar'
import { useSession } from 'next-auth/react'
import Login from '../components/admin-panel/Login'
import { useAppSelector } from '@/redux/hooks'
import Loader from '../components/admin-panel/Loader'

const layout = ({ children }: { children: React.ReactNode }) => {
    const { data: session } = useSession()
    const isLoading = useAppSelector((store) => store.loadingReducer)
    if (!session?.user) {
        return <Login />
    }

    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full h-full'>
                <Navbar />
                <div className='bg-gray-200 p-4 h-[calc(100vh-64px)]'>
                    {children}
                </div>
            </div>
            {isLoading && <Loader />}
        </div>
    )
}

export default layout