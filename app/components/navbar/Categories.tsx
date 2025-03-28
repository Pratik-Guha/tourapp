"use client"
import React from 'react'
import Container from '../Container'
import { TbBeach, TbBuildingCircus } from 'react-icons/tb'
import { PiMountains } from 'react-icons/pi'
import { GiBoatFishing, GiByzantinTemple, GiCastle, GiCaveEntrance, GiDesert, GiForestCamp, GiIsland } from 'react-icons/gi'
import CategoryBox from '../CategoryBox'
import { usePathname, useSearchParams } from 'next/navigation'
import { MdOutlinePool } from 'react-icons/md'
import { FaRegSnowflake, FaSkiing } from 'react-icons/fa'
import { IoDiamond } from 'react-icons/io5'

export const categories = [

    {
        label:'Beach',
        icon:TbBeach,
        description:'This property is close to the Beach!'
    },
    {
        label:'Mountains',
        icon:PiMountains,
        description:'This property is close to the Mountains!'
    },

    {
        label:'Temple',
        icon:GiByzantinTemple,
        description:'This property is close to the Temple!'
    },
    {
        label:'Desert',
        icon:GiDesert,
        description:'This property is close to the Desert!'
    },
    {
        label:'Pool',
        icon:MdOutlinePool,
        description:'This property is close to the Pool!'
    },
    {
        label:'Island',
        icon:GiIsland,
        description:'This property is close to the Island!'
    },
    {
        label:'Lake',
        icon:GiBoatFishing,
        description:'This property is close to the Lake!'
    },
    {
        label:'Skiing',
        icon:FaSkiing,
        description:'This property has skiing activities!'
    },
    {
        label:'Castle',
        icon:GiCastle,
        description:'This property is in a castle!'
    },
    {
        label:'Camping',
        icon:GiForestCamp,
        description:'This property has camping activities!'
    },
    {
        label:'Arctic',
        icon:FaRegSnowflake,
        description:'This property is close to the Arctic!'
    },
    {
        label:'Lux',
        icon:IoDiamond,
        description:'This property is like luxurious!'
    },
    {
        label:'Cave',
        icon:GiCaveEntrance,
        description:'This property is close to the Cave!'
    },
    {
        label:'Circus',
        icon:TbBuildingCircus,
        description:'This property is close to the Circus!'
    },
]

export default function Categories() {

  const params=useSearchParams();
  const category=params?.get('category');
  const pathname=usePathname();

  const isMainPage=pathname==='/';

  if(!isMainPage){
    return null;
  }
  return (
    <Container>
       <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
         {
            categories.map((item)=>(
                <CategoryBox key={item.label} 
                 label={item.label}
                 icon={item.icon} 
                //  description={item.description}
                selected={category===item.label}
                 />
            ))
         }
       </div>
    </Container>
  )
}
