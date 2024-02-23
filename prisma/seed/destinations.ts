import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const destinations = [
  {
    name: "Lunaria City, Moon",
    description:
      "A bustling metropolis on the Moon, known for its low-gravity amusement parks and the famous Sea of Tranquility Beach Resort.",
    distance: "384,400 km",
    travelTime: "3 hours",
  },
  {
    name: "Martian Eden, Mars",
    description:
      "A lush, terraformed oasis on Mars, featuring red sand deserts contrasted with blue artificial lakes, offering extreme sports and Martian archaeology tours.",
    distance: "54.6 million km",
    travelTime: "1 day",
  },
  {
    name: "Asteroid Z-259, Asteroid Belt",
    description:
      "A luxury resort carved inside a giant, hollowed-out asteroid, offering zero-gravity spas, asteroid mining experiences, and breathtaking solar system views.",
    distance: "Approximately 450 million km",
    travelTime: "2 days",
  },
  {
    name: "Titan's Cryo-Geysers, Titan",
    description:
      "Visit the icy geysers of Titan, Saturn's largest moon. Experience the thrill of cryo-volcanoes and ice surfing under the glow of Saturn's rings.",
    distance: "About 1.2 billion km",
    travelTime: "7 days",
  },
  {
    name: "Neptunian Retreat, Neptune",
    description:
      "A floating cloud city in Neptune's upper atmosphere, known for its exotic weather phenomena and deep-sea cloud fishing.",
    distance: "4.3 billion km",
    travelTime: "14 days",
  },
  {
    name: "Plutonian Shadows, Pluto",
    description:
      "An adventure destination for those who love mystery, featuring ice cave explorations and night skiing under Pluto's starlit sky.",
    distance: "5.9 billion km",
    travelTime: "18 days",
  },
  {
    name: "Orbital Oasis, Earth Orbit",
    description:
      "A luxurious space station orbiting Earth, providing panoramic views of the planet, spacewalks, and cultural events featuring artists from around the globe.",
    distance: "400 km",
    travelTime: "1 hour",
  },
  {
    name: "Galactic Gateway, Alpha Centauri",
    description:
      "The jumping-off point for intergalactic exploration, offering tours of exoplanets, alien wildlife safaris, and cultural exchanges with extraterrestrial civilizations.",
    distance: "4.37 light-years",
    travelTime: "1 month",
  },
  {
    name: "Venusian Sky Gardens, Venus",
    description:
      "Explore the upper atmosphere of Venus in aerostat habitats, featuring floating botanical gardens and breathtaking sunrises.",
    distance: "41 million km",
    travelTime: "5 hours",
  },
  {
    name: "Quantum Quay, The Edge of the Universe",
    description:
      "For the truly adventurous, a resort located at the very edge of the observable universe, offering views into the cosmic unknown and lectures on the mysteries of the cosmos.",
    distance: "Immeasurable",
    travelTime: "Undefined",
  },
  {
    name: "Singularity Basecamp, Black Hole Periphery",
    description:
      "An extreme destination near a stable black hole, providing the unique experience of time dilation tours and gravity-defying activities.",
    distance:
      "Variable; nearest black hole (V616 Monocerotis) is about 3,000 light-years away",
    travelTime: "2 months",
  },
  {
    name: "Starforge Station, Near a Neutron Star",
    description:
      "A high-tech industrial and research facility offering experiences like forging new elements and high-gravity experiments.",
    distance:
      "Variable; the closest known neutron star (RX J1856.5-3754) is about 400 light-years away",
    travelTime: "3 weeks",
  },
];

async function seedDestinations() {
  console.log("Seeding destinations...");

  // Cleanup existing destinations for idempotency
  await prisma.destination.deleteMany().catch((e) => {
    console.log(
      "No existing destinations to delete or deletion failed:",
      e.message,
    );
  });

  // Seed each destination
  for (const destination of destinations) {
    const createdDestination = await prisma.destination.create({
      data: destination,
    });
    console.log(`Created destination: ${createdDestination.name}`);
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
