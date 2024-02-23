import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const hostUsers = [
  {
    email: "host1@example.com",
    password: "password1",
    details: "Experienced space travel enthusiast and guide.",
  },
  {
    email: "host2@example.com",
    password: "password2",
    details: "Lunar habitats specialist with a passion for moon gardens.",
  },
  {
    email: "host3@example.com",
    password: "password3",
    details: "Asteroid mining expert and zero-gravity architect.",
  },
  {
    email: "host4@example.com",
    password: "password4",
    details:
      "Interstellar travel agent with a knack for exotic space destinations.",
  },
  {
    email: "host5@example.com",
    password: "password5",
    details: "Retired astronaut now hosting deep space expeditions.",
  },
];

async function seedHostUsers() {
  console.log("Seeding host users...");

  for (const host of hostUsers) {
    const hashedPassword = await bcrypt.hash(host.password, 10);
    const user = await prisma.user.create({
      data: {
        email: host.email,
        password: hashedPassword,
        isHost: true,
      },
    });

    await prisma.hostProfile.create({
      data: {
        details: host.details,
        userID: user.id,
      },
    });

    console.log(`Created host user and profile: ${user.email}`);
  }

  console.log("Finished seeding host users.");
}

seedHostUsers()
  .catch((e) => {
    console.error("Error seeding host users:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
