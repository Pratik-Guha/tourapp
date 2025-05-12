import { getCurrentUser } from '@/app/actions/getCurrentUser';
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import Title from '@/app/components/Title';
import React from 'react'
import Booking from './Booking';

export default async function Bookings() {
    const currentUser=await getCurrentUser();
    
    if(!currentUser){
        return(
            <ClientOnly>
                <EmptyState 
                    title="Unauthorized"
                    subtitle="Please login"
                />
            </ClientOnly>
        )
    }
  return (
    <div className='py-28 md:pb-36 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
      <Title 
      title="My Bookings" 
      subtitle="Easily mannange your past, currennt, annnd upcoming hotel reservations in oe place .Plane
      your trips seamlessly with just a few clicks " align="left"/>
      <div className='max-w-6xl mt-8 w-full '>
        <div 
         className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b-2 border-yellow-300 font-medium py-4'
        >
          <div className='w-1/3'>Hotels</div>
          <div className='w-1/3'>Date & Timings</div>
          <div className='w-1/3'>Payment</div>
        </div>

        <Booking/>
      </div>
    </div>
  )
}
