"use client"
import { GrLocation } from "react-icons/gr";
export const cities = [
  
  { "name": "Agra" },
  { "name": "Ahmedabad" },
  { "name": "Aizawl" },
  { "name": "Ajmer" },
  { "name": "Alappuzha" },
  { "name": "Amritsar" },
  { "name": "Aurangabad" },
  { "name": "Ayodhya" },
  { "name": "Badrinath" },
  { "name": "Bangalore" },
  { "name": "Bhopal" },
  { "name": "Bhubaneswar" },
  { "name": "Bikaner" },
  { "name": "Bodh Gaya" },
  { "name": "Chandigarh" },
  { "name": "Chennai" },
  { "name": "Cherrapunji" },
  { "name": "Coimbatore" },
  { "name": "Coonoor" },
  { "name": "Darjeeling" },
  { "name": "Dharamshala" },
  { "name": "Diu" },
  { "name": "Dooars" },
  { "name": "Dwarka" },
  { "name": "Gangtok" },
  { "name": "Gaya" },
  { "name": "Goa" },
  { "name": "Gokarna" },
  { "name": "Gulmarg" },
  { "name": "Gurgaon" },
  { "name": "Guwahati" },
  { "name": "Hampi" },
  { "name": "Haridwar" },
  { "name": "Hyderabad" },
  { "name": "Imphal" },
  { "name": "Indore" },
  { "name": "Jaisalmer" },
  { "name": "Jammu" },
  { "name": "Jodhpur" },
  { "name": "Junagadh" },
  { "name": "Kanchipuram" },
  { "name": "Kanpur" },
  { "name": "Kanyakumari" },
  { "name": "Kargil" },
  { "name": "Karwar" },
  { "name": "Kaziranga" },
  { "name": "Kedarnath" },
  { "name": "Kochi" },
  { "name": "Kodaikanal" },
  { "name": "Kolhapur" },
  { "name": "Kolkata" },
  { "name": "Kollam" },
  { "name": "Kovalam" },
  { "name": "Kozhikode" },
  { "name": "Kullu" },
  { "name": "Kumarakom" },
  { "name": "Kurukshetra" },
  { "name": "Leh" },
  { "name": "Lucknow" },
  { "name": "Ludhiana" },
  { "name": "Madurai" },
  { "name": "Mahabalipuram" },
  { "name": "Manali" },
  { "name": "Mandi" },
  { "name": "Mangalore" },
  { "name": "Mathura" },
  { "name": "Mount Abu" },
  { "name": "Munnar" },
  { "name": "Mussoorie" },
  { "name": "Mysore" },
  { "name": "Nagpur" },
  { "name": "Nainital" },
  { "name": "Nashik" },
  { "name": "New Delhi" },
  { "name": "Ooty" },
  { "name": "Pahalgam" },
  { "name": "Panaji" },
  { "name": "Patna" },
  { "name": "Pondicherry" },
  { "name": "Porbandar" },
  { "name": "Prayagraj" },
  { "name": "Pune" },
  { "name": "Pushkar" },
  { "name": "Ranchi" },
  { "name": "Rishikesh" },
  { "name": "Sarnath" },
  { "name": "Shillong" },
  { "name": "Shimla" },
  { "name": "Shirdi" },
  { "name": "Sikkim" },
  { "name": "Srinagar" },
  { "name": "Surat" },
  { "name": "Thanjavur" },
  { "name": "Thiruvananthapuram" },
  { "name": "Tirupati" },
  { "name": "Udaipur" },
  { "name": "Ujjain" },
  { "name": "Vadodara" },
  { "name": "Varanasi" },
  { "name": "Varkala" },
  { "name": "Vijayawada" },
  { "name": "Visakhapatnam" }
  // Add more cities as needed

]
export default function HeroSection() {
   
  return (
    <div className='flex top-0 left-0 right-0  flex-col items-start justify-center px-6 md:px-16 lg:px-24 snap-xpx32
     bg-[url("/assets/hotel2.webp")] bg-cover bg-no-repeat h-screen '>
      <p className='bg-blue-500 cursor-pointer opacity-80 px-2 py-1 rounded-full mt-20 text-sm md:text-xl'>The Ultimate Hotel Experiennce</p>
      <h1 className='fonnt-bold text-2xl md:text-4xl md:leading-10 md:font-extrabold max-w-xl mt-4 '>
        Discover Your Perfect Stay
        </h1>
      <p className='max-w-96 mt-2 text-sm md:text-base'>Unparalled luxury and comfort await at the world&apos;s finest hotels</p>
      <div className='mt-8'>
        <form className='bg-white text-gray-500 rounded-lg px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

            <div>
                <div className='flex items-center gap-2'>
                    <GrLocation className="w-4 h-4 text-gray-800" />
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                {/* Todo */}
                <datalist id='destinations'>
                    {
                      cities.map((city) => <option value={city.name} key={city.name} />)
                    }
                </datalist>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                    </svg>
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                    </svg>
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
              {/* <FaUserGroup className="w-4 h-4 text-gray-800" /> */}
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
                <span>Search</span>
            </button>
        </form>
      </div>
    </div>
  )
}
