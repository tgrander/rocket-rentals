-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_spacecraft_images" (
    "imageID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "spacecraftID" INTEGER NOT NULL,
    "imagePath" TEXT NOT NULL,
    "isHero" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "spacecraft_images_spacecraftID_fkey" FOREIGN KEY ("spacecraftID") REFERENCES "Spacecraft" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_spacecraft_images" ("createdAt", "description", "imageID", "imagePath", "spacecraftID", "updatedAt") SELECT "createdAt", "description", "imageID", "imagePath", "spacecraftID", "updatedAt" FROM "spacecraft_images";
DROP TABLE "spacecraft_images";
ALTER TABLE "new_spacecraft_images" RENAME TO "spacecraft_images";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
