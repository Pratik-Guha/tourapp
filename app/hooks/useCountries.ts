import countries from "world-countries";

const getFlagEmoji = (code: string) => {
    if (!code) return "";
    return code
      .toUpperCase()
      .split("")
      .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
      .join("");
  };
  
const formattedCountries=countries.map((country)=>({
    flag:getFlagEmoji(country.cca2),
    label:country.name.common,
    latlng:country.latlng,
    region:country.region,
    value:country.cca2,
}));

const useCountries=()=>{
    const getAll=()=>formattedCountries;

    const getByValue=(value:string)=>{
       return formattedCountries.find((item)=>item.value===value)
    }
    return {getAll,getByValue}
}

export default useCountries;