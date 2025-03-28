import { getCurrentUser } from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import SpotsClient from "./SpotsClient";

const SpotsPage =async () => {
    const currentUser=await getCurrentUser();

    if(!currentUser){
        return(
            <ClientOnly>
                <EmptyState 
                    title="Unauthorized"
                    subtitle="Please login"
                />
            </ClientOnly>
        )
    }

    const listings=await getListings({
        userId:currentUser.id
    });

    if(listings.length===0){
        return(
            <ClientOnly>
                <EmptyState 
                    title="No Spots found"
                    subtitle="Looks like you have not reserved any spots"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <SpotsClient 
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default SpotsPage;

