import { NextResponse } from "next/server"

import prisma from "@/app/libs/prismadb"
import { getCurrentUser } from "@/app/actions/getCurrentUser"

// POST handler to add a listing to favorites
export async function POST(request: Request, { params }: { params: { listingId: string } }) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const { listingId } = params

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID")
  }

  const favoriteIds = [...(currentUser.favoriteIds || [])]

  favoriteIds.push(listingId)

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds,
    },
  })

  return NextResponse.json(user)
}

// DELETE handler to remove a listing from favorites
export async function DELETE(request: Request, { params }: { params: { listingId: string } }) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const { listingId } = params

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID")
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])]

  favoriteIds = favoriteIds.filter((id) => id !== listingId)

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds,
    },
  })

  return NextResponse.json(user)
}

