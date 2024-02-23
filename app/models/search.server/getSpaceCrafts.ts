import type { SpaceCraft } from "@prisma/client";
import { prisma } from "~/db.server";

export async function getSpaceCrafts() {
  return prisma.spaceCraft.findMany({
    include: {
      type: true,
      tags: true,
      images: true,
    },
  });
}
