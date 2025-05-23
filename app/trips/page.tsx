import { getCurrentUser } from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import TripClient from "./TripClient";

const TripsPage =async () => {
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

    const reservations=await getReservations({
        userId:currentUser.id
    });

    if(reservations.length===0){
        return(
            <ClientOnly>
                <EmptyState 
                    title="No trips found"
                    subtitle="Looks like you have not reserved any trips"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <TripClient 
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default TripsPage;

