"use client"

import useCountries from "@/app/hooks/useCountries";
import  useSearchModel  from "@/app/hooks/useSearchModal"
import { differenceInCalendarDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { FaSearch } from "react-icons/fa"

export const Search=()=>{
    const searchModel=useSearchModel();
    const params=useSearchParams();

    const {getByValue}=useCountries();

    const locationsValue=params?.get('locationValue');
    const startDate=params?.get('startDate');
    const endDate=params?.get('endDate');
    const guestCount=params?.get('guestCount');

    const locationLabel = useMemo(() => {
        const country = getByValue(locationsValue || ""); 
        return country ? ` ${country.label}` : "Anywhere"; 
      }, [locationsValue, getByValue]);


    const durationLabel=useMemo(()=>{
        if(startDate && endDate){
            const start=new Date(startDate as string);
            const end=new Date(endDate as string);
           let diff=differenceInCalendarDays(end,start);

           if(diff===0){
            diff=1;
           }
            return `${diff} days`;
        }
        return 'Anyweek';
    },[startDate,endDate])

    const guestLabel=useMemo(()=>{
        if(guestCount){
            return `${guestCount} Guests`;
        }
        return 'Add Guests';
    },[guestCount])
    return (
        <div onClick={searchModel.onOpen}
        className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm 
        hover:shadow-md transition cursor-pointer"
        >
           <div className="flex flex-row items-center justify-between">
            <div className="text-sm font-semibold px-6">
                {locationLabel}
            </div>
            <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] 
            flex-1 text-center">
                {durationLabel}
            </div>
            <div 
            className="text-sm pl-6 pr-2 text-gray-300 flex flex-row
             items-center gap-3">
            
            <div className="hidden sm:block">
                {guestLabel}
            </div>
            <div className="p-2 bg-rose-500 rounded-full ">
            <FaSearch size={15}/>
            </div>
            </div>
           </div>
        </div>
    )
}