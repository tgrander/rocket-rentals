import { PrismaClient } from "@prisma/client";
import { Tag } from "../data/tags";

const prisma = new PrismaClient();

type SpacecraftImageData = {
  imagePath: string;
  description?: string;
};

type SpacecraftData = {
  name: string;
  type: string;
  status: string;
  hostProfile: string;
  speed: number;
  tags: Tag[];
  images: SpacecraftImageData[];
};

export const spacecrafts: SpacecraftData[] = [
  {
    name: "Luna Glider",
    type: "Shuttle",
    status: "Available",
    hostProfile: "host@example.com",
    speed: 7500, // Example speed in km/h
    tags: [Tag.Adventure, Tag.FamilyFriendly, Tag.Planetary],
    images: [
      {
        imagePath: "/images/luna-glider-1.jpg",
        description: "Luna Glider soaring above the lunar surface.",
      },
      {
        imagePath: "/images/luna-glider-2.jpg",
        description: "Interior view of Luna Glider's cockpit.",
      },
    ],
  },
  {
    name: "Mars Rover Supreme",
    type: "Rover",
    status: "Available",
    hostProfile: "host@example.com",
    speed: 100, // Assuming a slower speed for a rover
    tags: [Tag.Scientific, Tag.Exploration, Tag.Planetary],
    images: [
      {
        imagePath: "/images/mars-rover-1.jpg",
        description: "Mars Rover Supreme exploring the Martian landscape.",
      },
    ],
  },
  {
    name: "Asteroid Nomad",
    type: "Mining Shuttle",
    status: "Available",
    hostProfile: "host@example.com",
    speed: 15000, // Example speed for a mining shuttle
    tags: [Tag.Luxury, Tag.Asteroid, Tag.Adventure],
    images: [
      {
        imagePath: "/images/asteroid-nomad-1.jpg",
        description: "Asteroid Nomad docked at an asteroid mining station.",
      },
    ],
  },
  {
    name: "Titan Tundra Explorer",
    type: "Explorer",
    status: "Ready for Adventure",
    hostProfile: "host1@example.com", // Placeholder, replace with actual host profile identifier
    speed: 500, // Example speed, adjust as necessary
    tags: [Tag.Adventure, Tag.Scientific, Tag.Planetary],
    images: [
      {
        imagePath: "/images/titan-tundra-explorer.jpg",
        description:
          "A sturdy explorer vehicle with thermal shielding, navigating through icy geysers on Titan.",
      },
    ],
  },
  {
    name: "Neptune Nimbus",
    type: "Cloud Cruiser",
    status: "Operational",
    hostProfile: "host2@example.com", // Placeholder, replace with actual host profile identifier
    speed: 800, // Example speed, adjust as necessary
    tags: [Tag.Luxury, Tag.Relaxation, Tag.Planetary],
    images: [
      {
        imagePath: "/images/neptune-nimbus.jpg",
        description:
          "A cloud cruiser resembling a futuristic airship, floating among Neptune's bright blue clouds.",
      },
    ],
  },
  {
    name: "Pluto Pathfinder",
    type: "Ice Explorer",
    status: "Expedition Ready",
    hostProfile: "host3@example.com", // Placeholder, replace with actual host profile identifier
    speed: 450, // Example speed, adjust as necessary
    tags: [Tag.Exploration, Tag.Adventure, Tag.Planetary],
    images: [
      {
        imagePath: "/images/pluto-pathfinder.jpg",
        description:
          "An ice explorer vehicle with glowing headlights, exploring a dark, icy cave on Pluto.",
      },
    ],
  },
  {
    name: "Orbit Haven",
    type: "Space Station",
    status: "Operational",
    hostProfile: "host4@example.com", // Replace with actual host profile identifier
    speed: 0, // Stationary in orbit
    tags: [Tag.Cultural, Tag.Orbital, Tag.Relaxation],
    images: [
      {
        imagePath: "/images/orbit-haven.jpg",
        description:
          "A modular space station in Earth's orbit, featuring artistic elements like zero-gravity art studios and a lush biodome.",
      },
    ],
  },
  {
    name: "Galactic Pioneer",
    type: "FTL Cruiser",
    status: "Ready for Exploration",
    hostProfile: "host5@example.com", // Replace with actual host profile identifier
    speed: 25000, // Hypothetical FTL speed
    tags: [Tag.Exploration, Tag.Intergalactic, Tag.Cultural],
    images: [
      {
        imagePath: "/images/galactic-pioneer.jpg",
        description:
          "A sleek, FTL cruiser exiting a warp bubble near the Alpha Centauri system.",
      },
    ],
  },
  {
    name: "Venusian Serenity",
    type: "Aerostat",
    status: "Serenity Mode",
    hostProfile: "host6@example.com", // Replace with actual host profile identifier
    speed: 200, // Adjust based on realistic capabilities
    tags: [Tag.Relaxation, Tag.Planetary, Tag.Scientific],
    images: [
      {
        imagePath: "/images/venusian-serenity.jpg",
        description:
          "An elegant aerostat floating in Venus's upper atmosphere, with hanging gardens and water features.",
      },
    ],
  },
  {
    name: "Quantum Leap",
    type: "Quantum Yacht",
    status: "Quantum Ready",
    hostProfile: "host7@example.com", // Replace with actual host profile identifier
    speed: 30000, // Hypothetical quantum speed
    tags: [Tag.Exploration, Tag.Luxury, Tag.Scientific],
    images: [
      {
        imagePath: "/images/quantum-leap.jpg",
        description:
          "A luxurious quantum yacht positioned at the very edge of the observable universe.",
      },
    ],
  },
];
