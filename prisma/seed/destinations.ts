import { PrismaClient } from "@prisma/client";
import { destinations } from "../data/destinations";

const prisma = new PrismaClient();

async function seedDestinations() {
  console.log("Starting to seed destinations...");

  for (const destination of destinations) {
    const { tags, ...destinationData } = destination; // Destructure to separate tags from other destination data

    await prisma.destination.create({
      data: {
        ...destinationData, // Spread operator to include all destination fields except tags
        tags: {
          connect: tags.map((tagName) => ({ name: tagName })), // Connect each tag by name
        },
      },
    });

    console.log(`Seeded ${destination.name}`);
  }

  console.log("Finished seeding destinations.");
}

seedDestinations()
  .catch((e) => {
    console.error("Error seeding destinations:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
