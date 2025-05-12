
import { getCurrentUser } from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FeaturedHotels from "../components/FeaturedHotels";
import HeroSection from "../components/HeroSection";
import HotelRegistration from "../components/HotelRegistration";
import NewsTeller from "../components/NewsTeller";
import Offers from "../components/Offers";
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

    
    
    return (
        <ClientOnly>
           {false && <HotelRegistration/>}
            <SpotsClient  />
            <HeroSection/>
            <FeaturedHotels/>
            <Offers/>
            <NewsTeller/>
        </ClientOnly>
    )
}

export default SpotsPage;

