import { NextResponse } from "next/server"

import prisma from "@/app/libs/prismadb"
import { getCurrentUser } from "@/app/actions/getCurrentUser"

// POST handler to add a listing to favorites
import { NextRequest } from 'next/server';
export async function POST(request: NextRequest, context: {params: {listingId: string}}) {
  const { listingId } = context.params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }

  const favoriteIds = [...(currentUser.favoriteIds || [])];
  favoriteIds.push(listingId);

  const user = await prisma.user.update({
    where: { id: currentUser.id },
    data: { favoriteIds },
  });

  return NextResponse.json(user);
}

// DELETE handler to remove a listing from favorites
export async function DELETE(request : NextRequest, context: { params: { listingId: string}}) {
  const { params } = context; // Extract params properly
    const listingId = params?.listingId; // Ensure it's correctly accessed

    if (!listingId || typeof listingId !== "string") {
        throw new Error("Invalid ID");
    }

    const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error()
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

