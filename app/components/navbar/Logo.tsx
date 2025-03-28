"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const Logo = () => {
    const router = useRouter()
    return (
        <Image
            onClick={() => router.push('/')}
            src='/logo.webp'
            alt='Logo'
            width={50}
            height={50}
            className='cursor-pointer hidden md:block rounded-full'
        />
    )
}