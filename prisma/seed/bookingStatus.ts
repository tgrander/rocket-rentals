import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const listingBookingStatuses = [
  { name: "Available" },
  { name: "Booked" },
  { name: "Under Maintenance" },
  { name: "Unavailable" },
];

async function seedListingBookingStatuses() {
  console.log("Seeding ListingBookingStatuses...");

  // Cleanup existing statuses for idempotency
  await prisma.bookingStatus.deleteMany().catch((e) => {
    console.log(
      "No existing statuses to delete or deletion failed:",
      e.message,
    );
  });

  // Seed each status
  for (const status of listingBookingStatuses) {
    const createdStatus = await prisma.bookingStatus.create({
      data: status,
    });
    console.log(`Created status: ${createdStatus.name}`);
  }

  console.log("Finished seeding ListingBookingStatuses.");
}

seedListingBookingStatuses()
  .catch((e) => {
    console.error("Error seeding ListingBookingStatuses:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
