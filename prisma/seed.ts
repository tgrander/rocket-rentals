import {
  seedCategories,
  seedDestinations,
  seedHosts,
  seedSpaceCraftTypes,
  seedSpacecrafts,
  seedStatuses,
} from "./seed/";

async function main() {
  try {
    await seedSpaceCraftTypes();
    await seedStatuses();

    await seedHosts();
    await seedCategories();

    await seedDestinations();
    await seedSpacecrafts();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
