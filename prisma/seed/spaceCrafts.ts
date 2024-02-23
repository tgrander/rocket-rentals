import { PrismaClient } from "@prisma/client";
import {
  spacecrafts,
  randomAssortmentOfHostUserEmails,
} from "../data/spacecrafts";
import { BookingStatus } from "../data/bookingStatus";

const prisma = new PrismaClient();

async function seedSpacecrafts() {
  console.log("Starting to seed spacecrafts...");

  for (const [index, sc] of spacecrafts.entries()) {
    const { name, speed, type, tags, images, pricePerDay } = sc;

    const hostEmail = randomAssortmentOfHostUserEmails[index];

    const spacecraft = await prisma.spaceCraft.create({
      data: {
        name: name,
        speed: speed,
        pricePerDay,
        type: { connect: { name: type } },
        status: { connect: { name: BookingStatus.Available } },
        hostProfile: { connect: { userEmail: hostEmail } },
        tags: {
          connect: tags.map((tagName) => ({ name: tagName })),
        },
        images: {
          create: images.map((img) => ({
            cloudinaryPublicId: img.cloudinaryPublicId,
            description: img.description,
          })),
        },
      },
    });

    console.log(`Seeded spacecraft: ${spacecraft.name}`);
  }

  console.log("Finished seeding spacecrafts.");
}

export default async () => {
  await seedSpacecrafts()
    .catch((e) => {
      console.error("Error seeding spacecrafts:", e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};
