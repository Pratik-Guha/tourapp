import getCurrentUser from "@/app/actions/GetCurrentUser"
import { type NextRequest, NextResponse} from "next/server"
import prisma from "@/app/libs/prismadb"

export async function POST(request: NextRequest, { params }: { params: { listingId: string } }) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return new NextResponse("Unauthorized", { status: 401 })
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

export async function DELETE(request: NextRequest, { params }: { params: { listingId: string } }) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return new NextResponse("Unauthorized", { status: 401 })
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

