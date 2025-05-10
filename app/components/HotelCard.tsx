'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { assets } from '@/public/assets/assets';

type Hotel = {
  name: string;
  address: string;
};

type Room = {
  _id: string;
  name: string;
  image: string;
  hotel: Hotel;
  pricePerNight: number;
};

interface HotelCardProps {
  room: Room;
  index: number;
}

const HotelCard: React.FC<HotelCardProps> = ({ room, index }) => {
  return (
    <Link
      href={`/spots/hotels/${room._id}`}
      className="w-full md:w-1/4 p-2 relative bg-orange-300 rounded-xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out"
      onClick={() => window.scrollTo(0, 0)}
    >
      <Image
        src={room.images?.[0] || '/assets/hotel.webp'}
        width={500}
        height={300}
        alt={room.hotel.name}
        className="relative  w-full h-44 object-cover rounded-xl overflow-hidden  "
      />

      {index % 2 === 0 && (
        <p className="px-4 py-1 absolute top-2 left-2 dark:bg-white bg-black text-white dark:text-black rounded-full font-medium">
          Best Seller
        </p>
      )}

      <div className="p-4 pt-5">
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">{room.hotel.name}</p>
          <div className="flex items-center gap-1">
            <Image src={assets.starIconFilled} alt="star" width={16} height={16} />
            4.5
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Image src={assets.locationFilledIcon} alt="location" width={14} height={14} />
          <span>{room.hotel.address}</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p>
            <span className="text-xl font-bold">${room.pricePerNight}</span> / night
          </p>
          <button className="px-4 py-2 text-sm font-medium border-2 border-gray-300 rounded-md hover:bg-gray-500 transition-all cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
