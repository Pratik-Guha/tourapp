"use client";

import StarRating from "@/app/components/StarRating";
import { assets } from "@/public/assets/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";
export type AmenityName =
  | "Free WiFi"
  | "Free Breakfast"
  | "Room Service"
  | "Mountain View"
  | "Pool Access"
  | "Garden View"
  | "Private Balcony"
  | "Sea View"
  | "Jacuzzi";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const facilityIcons: Record<AmenityName, any> = {
  "Free WiFi": assets.freeWifiIcon,
  "Free Breakfast": assets.freeBreakfastIcon,
  "Room Service": assets.roomServiceIcon,
  "Mountain View": assets.mountainIcon,
  "Pool Access": assets.poolIcon,
  "Garden View": assets.park,
  "Private Balcony": assets.balcony,
  "Sea View": assets.wave,
  "Jacuzzi": assets.jacuzzi

};
interface Hotel {
  name: string;
  city: string;
  address: string;
}

interface Room {
  _id: string;
  images: string[];
  hotel: Hotel;
  amenities: string[];
  pricePerNight: number; // Add this line
}

interface HotelDetailsProps {
  room: Room;
}

export default function HotelDetails({ room }: HotelDetailsProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/spots/hotels/${room._id}`);
    scrollTo(0, 0);
  };

  return (
    <div
      className="flex flex-col md:flex-row gap-6 items-start border-b-2 border-yellow-300 last:pb-32 py-10 last:border-none my-4"
      key={room._id}
    >
      <Image
        onClick={handleClick}
        src={room.images[0]}
        width={500}
        height={300}
        alt={room.hotel.name}
        title="View Room Details"
        className="max-h-64 md:w-1/2 rounded-xl shadow-xl object-cover hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer"
      />
      <div className="md:w-1/2 flex flex-col gap-2">
        <p>{room.hotel.city}</p>
        <p onClick={handleClick} className="text-2xl cursor-pointer">
          {room.hotel.name}
        </p>
        <div className="flex items-center gap-1">
          <StarRating rating={4.5} />
          <p className="ml-2">200+ reviews</p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Image
            src={assets.locationIcon}
            alt="location"
            width={20}
            height={20}
          />
          <span>{room.hotel.address}</span>
        </div>
        {/* Room Details  */}
        <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
          {room.amenities.map((item, index) => {
            const icon = facilityIcons[item as AmenityName];
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100/50"
              >
                <Image
                  src={icon}
                  alt={item}
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p>{item}</p>
              </div>
            );
          })}
        </div>

        <p className="font-bold text-2xl">
          ${room.pricePerNight}/ night
        </p>
      </div>
    </div>
  );
}
