/*
  Warnings:

  - You are about to drop the column `genre_weighting` on the `Preference` table. All the data in the column will be lost.
  - You are about to drop the column `preference_genre` on the `Preference` table. All the data in the column will be lost.
  - Added the required column `genre_a_weighting` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preference_genre_a` to the `Preference` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Preference" DROP COLUMN "genre_weighting",
DROP COLUMN "preference_genre",
ADD COLUMN     "genre_a_weighting" INTEGER NOT NULL,
ADD COLUMN     "genre_b_weighting" INTEGER,
ADD COLUMN     "preference_genre_a" TEXT NOT NULL,
ADD COLUMN     "preference_genre_b" TEXT;
