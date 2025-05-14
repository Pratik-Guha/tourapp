// app/layout.tsx or app/layout.jsx
"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import OwnerNavbar from "../components/HotelOwner/Ownernavbar";
import ThemeToggleButton from "../toggle";
import SideBar from "../components/HotelOwner/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <OwnerNavbar />
          <ThemeToggleButton />
          <div className="flex h-screen">
            <SideBar />
            <main className="flex-1 overflow-auto p-4 pt-10 md:px-10">
              {children}
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
