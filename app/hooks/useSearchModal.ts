import { create } from "zustand";
const locations = [
    { value: "AX", label: "Aland Islands" },
    { value: "IN", label: "India" },
    { value: "US", label: "United States" },
    // Add more locations as needed
];

interface SearchModelStore{
    isOpen?:boolean;
    onOpen:()=>void;
    onClose:()=>void;
    getByValue: (value: string) => { value: string; label: string } | undefined;
}
const useSearchModel=create<SearchModelStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false}),
    getByValue: (value: string) => locations.find((location) => location.value === value),
}))

export default useSearchModel;