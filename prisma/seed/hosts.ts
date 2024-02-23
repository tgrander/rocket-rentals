import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { hostUsers } from "../data/hosts";

const prisma = new PrismaClient();

async function seedHostUsers() {
  for (const user of hostUsers) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await prisma.user.create({
      data: {
        email: user.email,
        password: hashedPassword,
        isHost: true,
        firstName: user.firstName,
        lastName: user.lastName,
        hostProfile: {
          create: {
            details: user.details,
          },
        },
      },
    });
    console.log(`Host user seeded: ${user.email}`);
  }
}

export default async () => {
  await seedHostUsers()
    .catch((e) => {
      console.error("Error seeding host users:", e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};
