import { prisma } from "~/db.server";

export const getDestinations = async () => {
  return prisma.destination
    .findMany({
      include: {
        tags: true,
      },
    })
    .catch((error) => {
      throw new Error(`Error getting destinations: ${error}`);
    });
};
