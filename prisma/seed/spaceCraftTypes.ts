import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const spacecraftTypes = [
  { name: "Shuttle" },
  { name: "Rover" },
  { name: "Explorer" },
  { name: "Mining Shuttle" },
  { name: "Cloud Cruiser" },
  { name: "Ice Explorer" },
  { name: "Space Station" },
  { name: "FTL Cruiser" },
  { name: "Aerostat" },
  { name: "Quantum Yacht" },
];

async function seedSpacecraftTypes() {
  console.log("Seeding spacecraft types...");

  // Cleanup existing spacecraft types for idempotency
  await prisma.spaceCraftType.deleteMany().catch((e) => {
    console.log(
      "No existing spacecraft types to delete or deletion failed:",
      e.message,
    );
  });

  // Seed each spacecraft type
  for (const type of spacecraftTypes) {
    const createdType = await prisma.spaceCraftType.create({
      data: type,
    });
    console.log(`Created spacecraft type: ${createdType.name}`);
  }

  console.log("Finished seeding spacecraft types.");
}

seedSpacecraftTypes()
  .catch((e) => {
    console.error("Error seeding spacecraft types:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
