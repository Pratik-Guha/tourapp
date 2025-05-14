"use client";
import { assets, dashboardDummyData } from "@/public/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

export default function Dashboard() {

  const [dashboardData, setDashboardData] = useState(dashboardDummyData);
  return (
    <>
      <div className="flex gap-4 my-8">
      <div className="p-4 rounded flex pr-8 border-2 border-red-300">
        <Image  
              src={assets.totalBookingIcon}
              //  width={50}
              //  height={50}
              className="max-sm:hidden h-10"
              alt="total booking"
              />
        <div className="flex flex-col sm:ml-4 font-medium">
          <p className="text-lg">Total Bookings</p>
          <p className="">{dashboardData.totalBookings}</p>
        </div>
      </div>
      <div className="p-4 rounded flex pr-8 border-2 border-red-300">
        <Image  
              src={assets.totalRevenueIcon}
              //  width={50}
              //  height={50}
              className="max-sm:hidden h-10"
              alt="total revenue"
              />
        <div className="flex flex-col sm:ml-4 font-medium">
          <p className="text-lg">Total Revenue</p>
          <p className="">$ {dashboardData.totalRevenue}</p>
        </div>
      </div>
    </div>
    <h2 className="font-bold text-2xl mb-5">
      Recent Bookings
    </h2>
    <div className="w-full max-w-3xl text-left border-2 border-yellow-300 rounded-lg max-h-80 overflow-y-scroll">
      <table className="w-full">
        <thead className="dark:bg-gray-500 bg-gray-300">
         <tr >
          <th className="px-4 py-3 font-lg">Use Name</th>
          <th className="px-4 py-3 font-lg">Room Type</th>
          <th className="px-4 py-3 font-lg">Total Amount</th>
          <th className="px-4 py-3 font-lg">Payment Status</th>
         </tr>
        </thead>
        <tbody>
          {
            dashboardData.bookings.map((item,index)=>(
              <tr key={index}>
                <td className="px-4 py-3 border-t border-gray-300">
                  {item.user.username}
                </td>
                <td className="px-4 py-3 border-t border-gray-300 max-sm:hidden">
                  {item.room.roomType}
                </td>
                <td className="px-4 py-3 border-t border-gray-300 text-center">
                  $ {item.totalPrice}
                </td>
                <td className="px-4 py-3 border-t border-gray-300 flex">
                  <button className={`px-3 py-1 rounded-full mx-auto ${item.isPaid ? 'bg-green-500' : 'bg-red-500'}`}>
                    {item.isPaid ? 'Completed' : 'Pending'}
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    </>
  );
}
