"use client"
import React from 'react'
import { IconType } from 'react-icons';

interface CategoryInputProps {
    icon:IconType;
    label:string;
    selected?:boolean;
    onClick:(value :string)=>void
}
const CategoryInput:React.FC<CategoryInputProps>=({
    icon:Icon,
    label,
    selected,
    onClick
}) => {
  return (
    <div onClick={()=>onClick(label)} 
    className={`flex flex-col items-center justify-center gap-3 p-4 border-2 rounded-2xl hover:text-neutral-800 transition cursor-pointer ${selected ?'border-black':'border-neutral-400'} hover:border-black`}>
      <Icon size={30}/>
      <div className="font-semibold">{label}</div>
    </div>
  )
}
export default CategoryInput;
