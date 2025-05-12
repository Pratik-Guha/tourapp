import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {UserButton} from '@clerk/clerk-react'

export default function Ownernavbar() {
  return (
    <div 
    className='ownernav'
    >
      <Link href="/">
      <Image 
        src={assets.logo}
        alt='logo'
        width={50}
        height={50}
        className='cursor-pointer invert opacity-80'
      />
      </Link>
      <UserButton/>
    </div>
  )
}
