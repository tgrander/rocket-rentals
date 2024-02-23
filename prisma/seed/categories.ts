import { tagCategoriesData } from "../data/categories";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedTagCategoriesAndTags() {
  console.log("Starting to seed tag categories and tags...");

  // Seed Tag Categories
  for (const categoryData of tagCategoriesData) {
    await prisma.tagCategory.upsert({
      where: { name: categoryData.name },
      update: {},
      create: { name: categoryData.name },
    });
    console.log(`Seeded/Checked Tag Category: ${categoryData.name}`);
  }

  // Seed Tags with Category Name Reference
  for (const categoryData of tagCategoriesData) {
    for (const tagName of categoryData.tags) {
      await prisma.tag.upsert({
        where: { name: tagName },
        update: { categoryName: categoryData.name },
        create: {
          name: tagName,
          categoryName: categoryData.name,
        },
      });
      console.log(
        `Seeded/Checked Tag: ${tagName} in Category: ${categoryData.name}`,
      );
    }
  }

  console.log("Finished seeding tag categories and tags.");
}

seedTagCategoriesAndTags()
  .catch((e) => {
    console.error("Error seeding tag categories and tags:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
