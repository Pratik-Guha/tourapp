import { useRouter } from "next/navigation";
import { useLoginModel } from "./useLogin";
import { useCallback, useMemo } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { SafeUser } from "../types";

interface IUseFavorite {
    listingId:string
    currentUser?:SafeUser|null
}

const useFavorite = ({listingId,currentUser}:IUseFavorite) => {
    const router=useRouter();
    const loginModel=useLoginModel();

    const hasFavorited=useMemo(()=>{
        const list=currentUser?.favoriteIds||[];
        return list.includes(listingId);
    },[currentUser,listingId])

    const toggleFavorite=useCallback(async(e:React.MouseEvent<HTMLDivElement>)=>{
        e.stopPropagation();
        if(!currentUser){
            return loginModel.onOpen();
        }

        try{
            let request;
            if(hasFavorited){
                request=()=>axios.delete(`/api/favorites/${listingId}`);
            }else{
                request=()=>axios.post(`/api/favorites/${listingId}`);
            }

            await request();
            router.refresh();
            toast.success('Success');
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        }catch(error){
            toast.error('Something went wrong.');
        }
    },[loginModel,currentUser,hasFavorited,listingId,router]);

    return {hasFavorited,toggleFavorite};
}

export default useFavorite;