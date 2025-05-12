"use client"
import Container from '../Container'
import React from 'react'
import { Logo } from './Logo'
import { Search } from './Search'
import { UserMenu } from './UserMenu'
import { SafeUser } from '@/app/types'
import Categories from './Categories'
// import { useRouter } from 'next/navigation'

interface NavbarProps {
  currentUser?: SafeUser | null
}

export const  Navbar: React.FC<NavbarProps>=({
  currentUser
})=> {
  // const router=useRouter();
  return (
    <div className='nav'>
      <div className='py-4   border-b border-blue-500'>
      <Container>
        <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
          <Logo/>
          <Search/>
          
          <UserMenu currentUser={currentUser}/>
        </div>
      </Container>
      </div>
      <Categories/>
    </div>
  )
}
