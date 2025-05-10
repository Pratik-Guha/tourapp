import React from 'react'
import Title from './Title'
import Image from 'next/image'
import { assets } from '@/public/assets/assets'
import {exclusiveOffers} from '@/public/assets/assets'
export default function Offers() {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pb-30 py-20'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
         <Title 
         align='left'
          title='Exclusive Offers'
          subtitle='Take advanntage of our limited-time offers and special discounts to enhance your travel experience which create unforgettable memories.'
         />
         <button 
         className='group flex items-center gap-2 font-medium text-lg max-md:mt-12  cursor-pointer'>
            View All Offers
            <Image  src={assets.arrowIcon} className='group-hover:translate-x-1 transition-all duration-300 ease-in-out' alt="arrow" width={20} height={20} />
         </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
        {
            exclusiveOffers.map((item)=>(
                <div key={item._id} 
                 className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl overflow-hidden bg-no-repeat bg-cover bg-center'
                 style={{ backgroundImage: `url(${item.image.src})` }}
                >
                <p className='px-3 py-1 absolute top-4 left-4 bg-white text-gray-500 rounded-full font-medium'>
                    {item.priceOff}% Off
                </p>
                <div>
                    <p className='font-bold text-2xl'>{item.title}</p>
                    <p>{item.description}</p>
                    <p className=' mt-3'>Expires {item.expiryDate}</p>
                </div>
                <button className='flex items-center gap-2 font-medium text-lg cursor-pointer mt-4 mb-5'>
                    View Offers
                    <Image 
                    src={assets.arrowIcon}
                    className='group-hover:translate-x-1 transition-all duration-300 ease-in-out invert'
                    alt='arrow'
                    width={20}
                    height={20}
                    />
                </button>
                </div>
            ))
        }
      </div>
    </div>
  )
}
