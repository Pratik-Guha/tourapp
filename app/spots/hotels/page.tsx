
import React from 'react'
import {roomsDummyData} from '@/public/assets/assets'
import HotelDetails from './HotelDetails';
import HotelFilter from '@/app/components/HotelFilter';


export default function page() {
  
  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32'>
      <div>
        <div className='flex flex-col items-start text-left'>
           <h1 className='text-4xl font-bold'>
            Hotel Rooms
           </h1>
           <p className='text-lg mt-2 max-w-6xl'>
            Take advantage of our limited-time offers and special discounts to enhance your travel experience which create unforgettable memories.
           </p>
        </div>
        {
          roomsDummyData.map((room)=>(
            <HotelDetails room={room} key={room._id} />
          ))
        }
      </div>
      {/* Filters */}
      <HotelFilter/>
    </div>
  )
}
