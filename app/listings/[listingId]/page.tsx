import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import React from 'react'
import ListingClient from './ListingClient';
import  getListingById from '@/app/actions/getListingById';
import getReservations from '@/app/actions/getReservations';
import { getCurrentUser } from '@/app/actions/getCurrentUser';

interface IParams {
    listingId:string
}
const ListingPage=async({params}:{params:IParams})=> {
    // There is some error here So at the end of the video plaese modify it accordingly.
    const listing=await getListingById(params);
    const currentUser=await getCurrentUser();
    const reservations=await getReservations(params);

    if(!listing){
        return (
            <ClientOnly >
                <EmptyState showReset/>
            </ClientOnly>
        );
    }
  return (
    <ClientOnly>
        <ListingClient 
        listing={listing} 
        reservations={reservations}
        currentUser={currentUser}/> 
    </ClientOnly>
  )
}

export default ListingPage;
