
import prisma from "@/app/libs/prismadb";
import { getCurrentUser } from "./getCurrentUser";

export default async function getFavoriteListings() {
    try{
        const currentUser=await getCurrentUser();

        if(!currentUser){
            return [];
        }

        const favorites=await prisma.listing.findMany({
            where: {
                id: {
                    in: [...currentUser.favoriteIds ||[]]
                }
            }
        });

        const safeFavorites=favorites.map((favorite)=>({
            ...favorite,
            createdAt:favorite.createdAt.toISOString(),
        }))

        return safeFavorites;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(error:any){
        throw new Error(error);
    }
}