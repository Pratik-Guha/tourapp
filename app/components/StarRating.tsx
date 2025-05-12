import Image from 'next/image'
import React from 'react'
import { assets } from '@/public/assets/assets'
export default function StarRating({rating=4}) {
  return (
    <>
      {Array(5).fill('').map((_,index)=>(
        <Image 
        key={index}
        src={rating>index? assets.starIconFilled:assets.starIconOutlined }
        alt='star'
        width={20}
        height={20}
        />
      ))}
    </>
  )
}
