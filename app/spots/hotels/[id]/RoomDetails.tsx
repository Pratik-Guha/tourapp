"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@mui/material";

import StarRating from "@/app/components/StarRating";
import { assets, roomCommonData, roomsDummyData } from "@/public/assets/assets";
import { facilityIcons } from "../HotelDetails";

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

type RoomType = {
  _id: string;
  hotel: {
    name: string;
    address: string;
    owner: {
      name: string;
      image: string;
    };
  };
  roomType: string;
  pricePerNight: number;
  amenities: AmenityName[];
  images: string[];
};

export default function RoomDetails() {
  const params = useParams();
  const id = params?.id as string;

  const [room, setRoom] = useState<RoomType | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id) as RoomType | undefined;
    if (room) {
      setRoom(room);
      setMainImage(room.images[0]);
    }
  }, [id]);

  if (!room || !mainImage) return null;

  return (
    <div className="py-28 md:py-36 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Room Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <h1 className="text-3xl md:text-4xl font-bold">
          {room.hotel.name} <span className="text-sm">({room.roomType})</span>
        </h1>
        <p className="text-sm py-1.5 px-3 bg-orange-500 text-white rounded-full">20% off</p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-2">
        <StarRating rating={4.5} />
        <p className="text-sm ml-2">200+ reviews</p>
      </div>

      {/* Address */}
      <div className="flex items-center gap-1 mt-2">
        <Image src={assets.locationIcon} alt="location" width={20} height={20} />
        <span>{room.hotel.address}</span>
      </div>

      {/* Images */}
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="lg:w-1/2 w-full">
          <Image
            src={mainImage}
            width={500}
            height={300}
            alt={room.hotel.name}
            className="w-full shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out object-cover rounded-xl overflow-hidden"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {room.images.length > 1 &&
            room.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={500}
                height={300}
                alt={room.hotel.name}
                className={`w-full rounded-xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out ${mainImage === image ? "outline-4 outline-orange-500" : ""}`}
                onClick={() => setMainImage(image)}
              />
            ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="flex flex-col md:flex-row md:justify-between mt-10">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-bold">Experience Luxury Like Never Before</h1>
          <div className="flex flex-wrap items-center gap-4 mb-6 mt-4">
            {room.amenities.map((highlight, index) => (
              <div
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-400"
                key={index}
              >
                <Image
                  src={facilityIcons[highlight]}
                  alt={highlight}
                  width={20}
                  height={20}
                />
                <p className="text-xs">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-2xl font-medium">${room.pricePerNight}/night</p>
      </div>

      {/* Form */}
      <form className="flex flex-col md:flex-row items-start md:items-center justify-between shadow-xl p-6 rounded-xl mx-auto mt-16 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-4 flex-wrap items-start md:items-center md:gap-10">
          <div className="flex flex-col">
            <label htmlFor="checkInDate" className="font-medium">
              Check In
            </label>
            <input
              type="date"
              id="checkInDate"
              placeholder="Check In Date"
              className="w-full dark:text-black rounded-md border-2 border-red-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>
          <div className="w-px h-16 bg-gray-300/70 max-md:hidden"></div>
          <div className="flex flex-col">
            <label htmlFor="checkOutDate" className="font-medium">
              Check Out
            </label>
            <input
              type="date"
              id="checkOutDate"
              placeholder="Check Out Date"
              className="w-full dark:text-black rounded-md border-2 border-red-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>
          <div className="w-px h-16 bg-gray-300/70 max-md:hidden"></div>
          <div className="flex flex-col">
            <label htmlFor="guests" className="font-medium">
              Guests
            </label>
            <input
              type="number"
              id="guests"
              placeholder="0"
              className="max-w-20 dark:text-black rounded-md border-2 border-red-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>
        </div>
        <Button variant="contained" size="large" type="submit">
          Check Availability
        </Button>
      </form>

      {/* Specifications */}
      <div className="mt-24 space-y-4">
        {roomCommonData.map((spec, index) => (
          <div className="flex items-center gap-2" key={index}>
            <Image
              src={spec.icon}
              alt={spec.title}
              width={30}
              height={30}
              className="dark:invert"
            />
            <div>
              <h3 className="font-medium">{spec.title}</h3>
              <p>{spec.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="max-w-3xl border-y-2 border-yellow-300 my-15 py-10">
        <p>
          Guests will be allocated on the ground floor according to Availability. Your get a
          comfortable two bedroom apartmennt has a true city feeling. The price quoted is for two
          guest, at the guest slot please mark the number of guests to get the exact price for groups
          . The Guests will be allocated ground floor accordinng to availibility. You get the
          comfortable two bedroom apartment has a true city feeling.
        </p>
      </div>

      {/* Hosted By */}
      <div className="flex flex-col items-start gap-4">
        <div className="flex gap-4">
          <Image
            src={room.hotel.owner.image}
            alt="Host"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <p className="text-lg md:text-xl">Hosted by {room.hotel.owner.name}</p>
            <div className="flex items-center mt-1">
              <StarRating rating={4.5} />
              <p className="ml-2">200+ reviews</p>
            </div>
          </div>
        </div>
        <Button variant="contained" size="large">
          Contact Now
        </Button>
      </div>
    </div>
  );
}