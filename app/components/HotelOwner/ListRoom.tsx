"use client";

import React, { useState } from "react";
import Title from "../Title";
import { roomsDummyData } from "@/public/assets/assets";

// Define the structure of a room item
interface Room {
  roomType: string;
  amenities: string[];
  pricePerNight: number;
  isAvailable: boolean;
}

export default function ListRoom() {
  const [rooms, setRooms] = useState<Room[]>(roomsDummyData);

  return (
    <div>
      <Title
        align="left"
        title="Room Listings"
        subtitle="View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."
      />

      <p className="text-lg mt-8">ALL ROOMS</p>

      <div className="w-full max-w-3xl text-left mt-3 border-2 border-red-300 rounded-lg max-h-80 overflow-y-scroll">
        <table className="w-full">
          <thead className="dark:bg-gray-500 bg-gray-300">
            <tr>
              <th className="px-4 py-3 font-lg">Name</th>
              <th className="px-4 py-3 font-lg">Facility</th>
              <th className="px-4 py-3 font-lg">Price / Night</th>
              <th className="px-4 py-3 font-lg">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rooms.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-4 border-t border-gray-300">
                  {item.roomType}
                </td>
                <td className="py-3 px-4 border-t border-gray-300 max-sm:hidden">
                  {item.amenities.join(", ")}
                </td>
                <td className="py-3 px-4 border-t border-gray-300">
                  ₹{item.pricePerNight}
                </td>
                <td className="py-3 px-4 border-t border-gray-300 text-center">
                  <label className="relative inline-flex items-center cursor-pointer gap-3">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.isAvailable}
                      readOnly
                    />
                    <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-500 transition-colors duration-200" />
                    <span className="dot absolute left-1 top-1 w-5 h-5 rounded-full transition-transform duration-200 bg-white peer-checked:translate-x-full ease-in-out" />
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
