"use client";

import { assets } from "@/public/assets/assets";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";

export default function SideBar() {
  const [isActive, setIsActive] = useState(true);
  const pathname = usePathname();

  const sidebarLinks = [
    { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
    { name: "Add Room", path: "/owner/add-room", icon: assets.addIcon },
    { name: "List Room", path: "/owner/list-rooms", icon: assets.listIcon },
  ];

  return (
    <div
      className={`md:w-64 w-16 border-r-2 h-full border-yellow-300 pt-4 flex flex-col transition-all duration-300`}
    >
      {sidebarLinks.map((item, index) => {
        const isCurrent = pathname === item.path;
        return (
          <Link href={item.path} key={index}>
            <div
              className={`flex items-center gap-4 px-4 py-3 hover:bg-yellow-200 cursor-pointer transition-all
          ${isCurrent ? "bg-yellow-300 font-semibold" : ""}
        `}
            >
              <Image src={item.icon} alt={item.name}
               
               className="w-6 h-6" />
              {isActive && (
                <span className="hidden md:inline text-black">{item.name}</span>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
