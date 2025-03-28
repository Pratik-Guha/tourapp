import { create } from "zustand";

interface UseRentModelStore{
    isOpen?:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}
export const useRentModel=create<UseRentModelStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false}),
}))