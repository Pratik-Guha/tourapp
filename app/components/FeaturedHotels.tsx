import React from 'react'
import {roomsDummyData} from '@/public/assets/assets'
import HotelCard from './HotelCard'
export default function FeaturedHotels() {
  return (
    <div className='flex  flex-col items-center px-6 md:px-16 lg:px-24 py-20'>
      <div className='flex  flex-wrap items-center justify-center gap-6 mt-20'>
        {roomsDummyData.map((room,index)=>
        <HotelCard 
        key={room._id}
        room={room} index={index} />)}
      </div>
    </div>
  )
}
