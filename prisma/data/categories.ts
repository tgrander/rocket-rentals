import { Tag } from "./tags";

enum TagCategoryName {
  DestinationThemes = "Destination Themes",
  DestinationTypes = "Destination Types",
  ExperienceTypes = "Experience Types",
}

type TagCategoryData = {
  name: TagCategoryName;
  tags: Tag[];
};

export const tagCategoriesData: TagCategoryData[] = [
  {
    name: TagCategoryName.DestinationThemes,
    tags: [
      Tag.Adventure,
      Tag.Cultural,
      Tag.Scientific,
      Tag.Relaxation,
      Tag.Exploration,
    ],
  },
  {
    name: TagCategoryName.DestinationTypes,
    tags: [Tag.Planetary, Tag.Asteroid, Tag.Orbital, Tag.Intergalactic],
  },
  {
    name: TagCategoryName.ExperienceTypes,
    tags: [Tag.FamilyFriendly, Tag.Luxury, Tag.EcoFriendly],
  },
];
