import { getCurrentUser } from '@/app/actions/getCurrentUser';
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import React from 'react'

export default async function Bookings() {
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
    <div>
      My Bookings
    </div>
  )
}
