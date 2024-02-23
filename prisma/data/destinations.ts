import { Tag } from "./tags";

export type Destination = {
  name: string;
  description: string;
  distance: string;
  travelTime: string;
  tags: Tag[];
};

export const destinations: Destination[] = [
  {
    name: "Lunaria City, Moon",
    description:
      "A bustling metropolis on the Moon, known for its low-gravity amusement parks and the famous Sea of Tranquility Beach Resort.",
    distance: "384,400 km",
    travelTime: "3 hours",
    tags: [Tag.Adventure, Tag.FamilyFriendly, Tag.Planetary], // Assigning relevant tags
  },
  {
    name: "Martian Eden, Mars",
    description:
      "A lush, terraformed oasis on Mars, featuring red sand deserts contrasted with blue artificial lakes, offering extreme sports and Martian archaeology tours.",
    distance: "54.6 million km",
    travelTime: "1 day",
    tags: [Tag.Scientific, Tag.Exploration, Tag.Planetary], // Assigning relevant tags
  },
  {
    name: "Asteroid Z-259, Asteroid Belt",
    description:
      "A luxury resort carved inside a giant, hollowed-out asteroid, offering zero-gravity spas, asteroid mining experiences, and breathtaking solar system views.",
    distance: "Approximately 450 million km",
    travelTime: "2 days",
    tags: [Tag.Luxury, Tag.Asteroid, Tag.Adventure], // Assigning relevant tags
  },
  {
    name: "Titan's Cryo-Geysers, Titan",
    description:
      "Visit the icy geysers of Titan, Saturn's largest moon. Experience the thrill of cryo-volcanoes and ice surfing under the glow of Saturn's rings.",
    distance: "About 1.2 billion km",
    travelTime: "7 days",
    tags: [Tag.Adventure, Tag.Scientific, Tag.Planetary], // Thrilling and scientific exploration on a planetary body
  },
  {
    name: "Neptunian Retreat, Neptune",
    description:
      "A floating cloud city in Neptune's upper atmosphere, known for its exotic weather phenomena and deep-sea cloud fishing.",
    distance: "4.3 billion km",
    travelTime: "14 days",
    tags: [Tag.Relaxation, Tag.Cultural, Tag.Planetary], // Serene and cultural experiences in a unique planetary atmosphere
  },
  {
    name: "Plutonian Shadows, Pluto",
    description:
      "An adventure destination for those who love mystery, featuring ice cave explorations and night skiing under Pluto's starlit sky.",
    distance: "5.9 billion km",
    travelTime: "18 days",
    tags: [Tag.Adventure, Tag.Exploration, Tag.Planetary], // Mysterious and adventurous exploration on a distant planetary body
  },
  {
    name: "Orbital Oasis, Earth Orbit",
    description:
      "A luxurious space station orbiting Earth, providing panoramic views of the planet, spacewalks, and cultural events featuring artists from around the globe.",
    distance: "400 km",
    travelTime: "1 hour",
    tags: [Tag.Luxury, Tag.Cultural, Tag.Orbital], // Luxurious and cultural experiences in Earth's orbit
  },
  {
    name: "Galactic Gateway, Alpha Centauri",
    description:
      "The jumping-off point for intergalactic exploration, offering tours of exoplanets, alien wildlife safaris, and cultural exchanges with extraterrestrial civilizations.",
    distance: "4.37 light-years",
    travelTime: "1 month",
    tags: [Tag.Exploration, Tag.Intergalactic, Tag.Cultural], // Intergalactic exploration and cultural exchanges at the gateway to other stars
  },
  {
    name: "Venusian Sky Gardens, Venus",
    description:
      "Explore the upper atmosphere of Venus in aerostat habitats, featuring floating botanical gardens and breathtaking sunrises.",
    distance: "41 million km",
    travelTime: "5 hours",
    tags: [Tag.Relaxation, Tag.Scientific, Tag.Planetary], // Serene and scientific experiences in the unique atmosphere of Venus
  },
  {
    name: "Quantum Quay, The Edge of the Universe",
    description:
      "For the truly adventurous, a resort located at the very edge of the observable universe, offering views into the cosmic unknown and lectures on the mysteries of the cosmos.",
    distance: "Immeasurable",
    travelTime: "Undefined",
    tags: [Tag.Adventure, Tag.Exploration, Tag.Scientific], // Adventurous exploration and scientific curiosity at the universe's edge
  },
  {
    name: "Singularity Basecamp, Black Hole Periphery",
    description:
      "An extreme destination near a stable black hole, providing the unique experience of time dilation tours and gravity-defying activities.",
    distance:
      "Variable; nearest black hole (V616 Monocerotis) is about 3,000 light-years away",
    travelTime: "2 months",
    tags: [Tag.Adventure, Tag.Scientific, Tag.Exploration], // Adventure and scientific exploration near a black hole
  },
  {
    name: "Starforge Station, Near a Neutron Star",
    description:
      "A high-tech industrial and research facility offering experiences like forging new elements and high-gravity experiments.",
    distance:
      "Variable; the closest known neutron star (RX J1856.5-3754) is about 400 light-years away",
    travelTime: "3 weeks",
    tags: [Tag.Scientific, Tag.Intergalactic], // Scientific research and industrial innovation in intergalactic space
  },
];
