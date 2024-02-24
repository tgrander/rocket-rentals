import { Destination, Tag } from "@prisma/client";
import { prisma } from "~/db.server";
import { DateToString } from "~/types";
import { convertDatesToStrings } from "~/utils";

export type ClientDestinations = DateToString<
  Destination & {
    tags: Tag[];
  }
>[];

export const getDestinations = async (): Promise<ClientDestinations> => {
  try {
    return await prisma.destination
      .findMany({
        include: {
          tags: true,
        },
      })
      .then((destinations) => {
        return convertDatesToStrings(destinations);
      });
  } catch (error) {
    throw new Error(`Error getting destinations: ${error}`);
  }
};
