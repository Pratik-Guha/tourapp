"use client";

import { assets } from "@/public/assets/assets";
import { useUser, useClerk } from "@clerk/nextjs";
import Image from "next/image";
// import Link from "next/link";

export default function OwnerNavbar() {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <div className="ownernav">
      {/* <Link href="/">
        <Image
          src="/logo.webp"
          alt="logo"
          width={50}
          height={50}
          className="cursor-pointer invert opacity-80"
        />
      </Link> */}

      {user && (
        <div className="flex items-center gap-2">
          <Image
            src={assets.locationIcon}
            alt="avatar"
            width={36}
            height={36}
            className="rounded-full cursor-pointer"
          />
          <button onClick={() => signOut()} className="text-sm text-red-500">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
