import useCountries from '@/app/hooks/useCountries';
import Image from 'next/image';
import React from 'react'
import Select from 'react-select';

export type CountrySelectValue={
  flag:string;
  label:string;
  latlng:number[];
  region:string;
  value:string;
}

interface CountrySelectProps {
  value?:CountrySelectValue;
  onChange:(value:CountrySelectValue)=>void;
}

const  CountrySelect:React.FC<CountrySelectProps> =({value,onChange})=> {
  const {getAll}=useCountries();
  // console.log(getAll());
  return (
    <div>
      <Select 
      placeholder="Anywhere" 
      options={getAll()} 
      isClearable
      value={value}
      onChange={(value)=>onChange?.(value as CountrySelectValue)}

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatOptionLabel={(option:any)=>
      (
      <div className="flex flex-row items-center gap-3">
       <Image
        src={`https://flagcdn.com/w40/${option.value.toLowerCase()}.png`}
        alt={`${option.label} flag`}
        width={40}
        height={30}
        unoptimized // ✅ Important: Disable Next.js optimization
        className="w-6 h-4"
      />
        <div>
          {option.label},
          <span className="ml-1 text-neutral-500">
          {option.region}
          </span>
          </div>
        </div>
        )}
        classNames={{
          control:()=> 'p-3 border-2',
          input:()=> 'text-lg',
          option:()=> 'text-lg'
        }}
        theme={(theme)=>({
          ...theme,
          borderRadius:6,
          colors:{
            ...theme.colors,
            primary:'black',
            primary25:'#82b0c2'
          }
        })}

      />
    </div>
  )
}

export default CountrySelect;