import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export enum SpaceCraftTypeName {
  Shuttle = "Shuttle",
  Rover = "Rover",
  Explorer = "Explorer",
  "Mining Shuttle" = "Mining Shuttle",
  "Cloud Cruiser" = "Cloud Cruiser",
  "Ice Explorer" = "Ice Explorer",
  "Space Station" = "Space Station",
  "FTL Cruiser" = "FTL Cruiser",
  Aerostat = "Aerostat",
  "Quantum Yacht" = "Quantum Yacht",
}

const spacecraftTypes: { name: SpaceCraftTypeName }[] = [
  { name: SpaceCraftTypeName.Aerostat },
  { name: SpaceCraftTypeName["Cloud Cruiser"] },
  { name: SpaceCraftTypeName.Explorer },
  { name: SpaceCraftTypeName["FTL Cruiser"] },
  { name: SpaceCraftTypeName["Ice Explorer"] },
  { name: SpaceCraftTypeName["Mining Shuttle"] },
  { name: SpaceCraftTypeName["Quantum Yacht"] },
  { name: SpaceCraftTypeName.Rover },
  { name: SpaceCraftTypeName.Shuttle },
  { name: SpaceCraftTypeName["Space Station"] },
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

export default async () => {
  await seedSpacecraftTypes()
    .catch((e) => {
      console.error("Error seeding spacecraft types:", e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};
