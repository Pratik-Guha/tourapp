"use client";

import React, { useState, ChangeEvent } from "react";
import Title from "../Title";
import Image from "next/image";
import { assets } from "@/public/assets/assets";

// Type for uploaded image (File or null)
type RoomImages = {
  [key: number]: File | null;
};

// Type for amenities object
type Amenities = {
  [key: string]: boolean;
};

// Type for room form state
interface RoomInputs {
  roomType: string;
  pricePerNight: number;
  amenities: Amenities;
}

export default function AddRoom() {
  const [images, setImages] = useState<RoomImages>({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
  });

  const [inputs, setInputs] = useState<RoomInputs>({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Room Service": false,
      "Free WiFi": false,
      "Free Breakfast": false,
      "Mountain View": false,
      "Pool Access": false,
      "Garden View": false,
      "Private Balcony": false,
      "Sea View": false,
      Jacuzzi: false,
    },
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>, key: number) => {
    const file = e.target.files?.[0] || null;
    setImages((prev) => ({ ...prev, [key]: file }));
  };

  return (
    <form>
      <Title
        align="left"
        title="Add Room"
        subtitle="Fill in the details carefully and accurate room details, pricing and amenities to enhance the user booking experience"
      />

      {/* Upload area for images */}
      <p className="text-lg mt-10">Upload Images</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:flex my-2 flex-wrap">
        {Object.entries(images).map(([key, file]) => (
          <label key={key} htmlFor={`roomImage${key}`}>
            <Image
              className="max-h-14 cursor-pointer opacity-80"
              src={file ? URL.createObjectURL(file) : assets.uploadArea}
              alt="roomImage"
              width={80}
              height={80}
            />
            <input
              type="file"
              id={`roomImage${key}`}
              accept="image/*"
              hidden
              onChange={(e) => handleImageChange(e, Number(key))}
            />
          </label>
        ))}
      </div>

      <div className="w-full flex max-sm:flex-col mt-4 sm:gap-4 text-black">
        <div className="flex-1 max-w-48">
          <p className="text-lg mt-4">Room Type</p>
          <select
            name="roomType"
            value={inputs.roomType}
            onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
            className="border-2 opacity-70 border-red-300 mt-1 rounded p-2 w-full"
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        <div>
          <p className="mt-4">
            Price <span className="text-sm">/night</span>
          </p>
          <input
            type="number"
            placeholder="0"
            className="border-2 mt-1 rounded p-2 w-24"
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: Number(e.target.value) })
            }
          />
        </div>
      </div>

      <p className="mt-4">Amenities</p>
      <div className="flex flex-wrap flex-col mt-1 max-w-sm">
        {Object.entries(inputs.amenities).map(([amenity, checked], index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`amenities${index + 1}`}
              checked={checked}
              onChange={() =>
                setInputs((prev) => ({
                  ...prev,
                  amenities: {
                    ...prev.amenities,
                    [amenity]: !prev.amenities[amenity],
                  },
                }))
              }
            />
            <label htmlFor={`amenities${index + 1}`}>{amenity}</label>
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="my-8 px-4 py-2 text-sm font-medium border-2 border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out cursor-pointer"
      >
        ADD ROOM
      </button>
    </form>
  );
}
