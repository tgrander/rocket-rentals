import { Tag } from "../data/tags";
import { BookingStatus } from "./bookingStatus";
import { SpaceCraftTypeName } from "../seed/spaceCraftTypes";

type SpacecraftImageData = {
  cloudinaryPublicId: string; // Cloudinary public ID, e.g. `spacecrafts/luna-glider-1`
  description?: string;
};

type SpacecraftData = {
  name: string;
  type: SpaceCraftTypeName;
  status: BookingStatus;
  pricePerDay: string;
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

const getCloudinaryPublicId = (id: string) => {
  return `spacecrafts/${id}`;
};

export const spacecrafts: SpacecraftData[] = [
  {
    name: "Luna Glider",
    type: SpaceCraftTypeName.Shuttle,
    status: BookingStatus.Available,
    speed: 7500, // Example speed in km/h
    pricePerDay: "Ξ250,000",
    tags: [Tag.Adventure, Tag.FamilyFriendly, Tag.Planetary],
    images: [
      {
        cloudinaryPublicId: getCloudinaryPublicId("oymlk75l22o1oh9lcpwl"),
        description: "Luna Glider soaring above the lunar surface.",
      },
    ],
  },
  {
    name: "Mars Rover Supreme",
    type: SpaceCraftTypeName.Rover,
    status: BookingStatus.Available,
    speed: 100, // Assuming a slower speed for a rover
    tags: [Tag.Scientific, Tag.Exploration, Tag.Planetary],
    pricePerDay: "Ξ225,000",
    images: [
      {
        cloudinaryPublicId: getCloudinaryPublicId("uvc5fadmuicuikhj66zj"),
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
    pricePerDay: "Ξ300,000",
    images: [
      {
        cloudinaryPublicId: getCloudinaryPublicId("uaeklrmuowibbhne6kdo"),
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
    pricePerDay: "Ξ275,000",
    images: [
      {
        cloudinaryPublicId: getCloudinaryPublicId("l8vqrdp6aoohwozb0b4i"),
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
    pricePerDay: "Ξ325,000",
    images: [
      {
        cloudinaryPublicId: getCloudinaryPublicId("teyh9uxnnebgqzwzzzee"),
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
    pricePerDay: "Ξ287,500",
    images: [
      {
        cloudinaryPublicId: getCloudinaryPublicId("avdois4rgy4bk0rdxtxo"),
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
    pricePerDay: "Ξ350,000",
    images: [
      {
        cloudinaryPublicId: getCloudinaryPublicId("ddugrkuldzffeajch3gu"),
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
    pricePerDay: "Ξ400,000",
    images: [
      {
        cloudinaryPublicId: getCloudinaryPublicId("vg7esbyx8aek18q6vufy"),
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
    pricePerDay: "Ξ312,500",
    images: [
      {
        cloudinaryPublicId: getCloudinaryPublicId("venusian-serenity"),
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
    pricePerDay: "Ξ450,000",
    images: [
      {
        cloudinaryPublicId: getCloudinaryPublicId("elesbt3evnbxeof0bimk"),
        description:
          "A luxurious quantum yacht positioned at the very edge of the observable universe.",
      },
    ],
  },
];
