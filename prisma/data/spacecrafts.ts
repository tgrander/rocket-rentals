import { Tag } from "../data/tags";
import { BookingStatus } from "./bookingStatus";
import { SpaceCraftTypeName } from "../seed/spaceCraftTypes";

type SpacecraftImageData = {
  imagePath: string;
  description?: string;
};

type SpacecraftData = {
  name: string;
  type: SpaceCraftTypeName;
  status: BookingStatus;
  speed: number;
  tags: Tag[];
  images: SpacecraftImageData[];
};

export const randomAssortmentOfHostUserEmails = [
  "host4@example.com",
  "host5@example.com",
  "host1@example.com",
  "host5@example.com",
  "host4@example.com",
  "host4@example.com",
  "host4@example.com",
  "host4@example.com",
  "host1@example.com",
  "host3@example.com",
];

export const spacecrafts: SpacecraftData[] = [
  {
    name: "Luna Glider",
    type: SpaceCraftTypeName.Shuttle,
    status: BookingStatus.Available,
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
    type: SpaceCraftTypeName.Rover,
    status: BookingStatus.Available,
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
    type: SpaceCraftTypeName["Mining Shuttle"],
    status: BookingStatus.Available,
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
    type: SpaceCraftTypeName.Explorer,
    status: BookingStatus.Available,
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
    type: SpaceCraftTypeName["Cloud Cruiser"],
    status: BookingStatus.Available,
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
    type: SpaceCraftTypeName["Ice Explorer"],
    status: BookingStatus.Available,
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
    type: SpaceCraftTypeName["Space Station"],
    status: BookingStatus.Available,
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
    type: SpaceCraftTypeName["FTL Cruiser"],
    status: BookingStatus.Available,
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
    type: SpaceCraftTypeName["Aerostat"],
    status: BookingStatus.Available,
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
    type: SpaceCraftTypeName["Quantum Yacht"],
    status: BookingStatus.Available,
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
