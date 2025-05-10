"use client"
import React from 'react'
import {roomsDummyData} from '@/public/assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useRouter } from 'next/navigation'

export default function FeaturedHotels() {
  const router=useRouter();
  return (
    <div className='flex  flex-col items-center px-6 md:px-16 lg:px-24 py-20'>
      <Title title='Featured Hotels' 
       subtitle='Discover our hanndpicked selection of exceptional properties around the world, offering unparalled luxury and comfort.'
      />
      <div className='flex  flex-wrap items-center justify-center gap-6 mt-20'>
        {roomsDummyData.map((room,index)=>
        <HotelCard 
        key={room._id}
        room={room} index={index} />)}
      </div>
      <button 
      onClick={()=>router.push('/spots/hotels')}
      
      className='my-16 px-4 py-2 text-sm font-medium border-2 border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out cursor-pointer'
      >
        View All Hotels
      </button>
    </div>
  )
}
