import { PrismaClient } from "@prisma/client";
import { destinations } from "../data/destinations";

const prisma = new PrismaClient();

async function seedDestinations() {
  console.log("Starting to seed destinations...");

  for (const destination of destinations) {
    await prisma.destination.create({
      data: destination,
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
