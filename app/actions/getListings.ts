import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
    userId?: string;
    guestCount?: number;
    roomCount?: number;
    bathroomCount?: number;
    startDate?: string;
    endDate?: string;
    locationValue?: string;
    category?: string;
}
export default async function getListings(
    params: IListingsParams={}
) {
    try {
        const awaitedParams = await params; // Ensure params are awaited before destructuring

        const {
            userId,
            guestCount,
            roomCount,
            bathroomCount,
            startDate,
            endDate,
            locationValue,
            category,
        } = awaitedParams;

        // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
        let query: any = {};

        if (userId) {
            query.userId = userId;
        }

        if (category) {
            query.category = category;
        }

        if (roomCount) {
            query.roomCount = {
                gte: +roomCount,
            };
        }

        if (guestCount) {
            query.guestCount = {
                gte: +guestCount,
            };
        }

        if (bathroomCount) {
            query.bathroomCount = {
                gte: +bathroomCount,
            };
        }

        if (locationValue) {
            query.locationValue = locationValue;
        }

        if(startDate && endDate) {
            query.NOT = {
                reservations: {
                    some: {
                        OR: [
                            {
                                endDate: { gte: startDate },
                                startDate: { lte: startDate },
                            },
                            {
                                startDate: { lte: endDate },
                                endDate: { gte: endDate },
                            },
                        ],
                    },
                }
            }
        }
        const listings = await prisma.listing.findMany({
            where: query,
            orderBy: {
                createdAt: "desc",
            },
        });
        const safeListings = listings.map((listing) => ({
            ...listing,
            createdAt: listing.createdAt.toISOString(),
            // updatedAt: listing.updatedAt.toISOString(),
        }))
        return safeListings;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:  any) {
        throw new Error(error);
    }
}