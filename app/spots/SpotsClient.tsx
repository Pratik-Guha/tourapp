"use client"

import { usePathname } from "next/navigation";
import Container from "../components/Container";

import Link from "next/link";



const SpotsClient = () => {
    const pathname = usePathname();
    const isOwnerPath = pathname?.includes('owner');
     const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/spots/hotels' },
        { name: 'Contact', path: '/spots/contacts' },
        { name: 'My Bookings', path: '/spots/bookings' },
    ];

    
    return ( 
        <Container>
            {!isOwnerPath && <div className=" rounded-lg flex justify-center items-center">

                 <div className=' w-full  h-[50px] flex flex-col md:flex-row items-center justify-between '>
                    {
                        navLinks.map((item) => (
                            <Link href={item.path} key={item.name} className="flex flex-row items-center ">
                                <span className="text-xl font-semibold py-3 px-4 rounded-lg hover:bg-gray-400 transition-all duration-300 cursor-pointer">{item.name}</span>
                            </Link>
                        ))
                    }
                 </div>
                </div>}
        </Container>
     );
}
 
export default SpotsClient;