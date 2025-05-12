import { assets, cities } from "@/public/assets/assets";
import Image from "next/image";
import React from "react";

import { Button } from "@mui/material";

export default function HotelRegistration() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/70">
      <form className="flex rounded-xl max-w-4xl max-md:mx-2 bg-white text-black">
        <Image
          src={assets.regImage}
          alt="register"
          width={500}
          height={500}
          className="hidden md:block rounned-xl"
        />
        <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
          <Image
            src={assets.closeIcon}
            alt="close"
            width={20}
            height={20}
            className="absolute top-4 right-4 cursor-pointer"
          />
          <p className="text-2xl font-bold mt-6">Register Your Hotel</p>
          {/* Hotel Name  */}
          <div className="w-full mt-4">
            <label htmlFor="name" className="font-medium text-gray-500">
              Hotel Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Type here"
              className="border-2 border-yellow-300 w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>
          {/* Address  */}
          <div className="w-full mt-4">
            <label htmlFor="address" className="font-medium text-gray-500">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Type here"
              className="border-2 border-yellow-300 w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>
          {/* phone  */}
          <div className="w-full mt-4">
            <label htmlFor="contact" className="font-medium text-gray-500">
              Contact
            </label>
            <input
              id="contact"
              type="number"
              placeholder="Type here"
              className="border-2 border-yellow-300 w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
              required
            />
          </div>
          {/* Select City Drop Down  */}
          <div className="w-full mt-4 max-w-60 mr-auto mb-6">
            <label htmlFor="city" className="font-medium text-gray-500">
              City
            </label>
            <select
              name="city"
              id="city"
              className="border-2 border-yellow-300 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option value={city} key={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <Button size="medium" variant="contained" className=" mt-10 ">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
