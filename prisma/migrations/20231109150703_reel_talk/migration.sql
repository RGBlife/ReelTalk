/*
  Warnings:

  - You are about to drop the column `preference_release_date` on the `Preference` table. All the data in the column will be lost.
  - You are about to drop the column `release_date_weighting` on the `Preference` table. All the data in the column will be lost.
  - Added the required column `release_year` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `release_date` on the `Movie` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `preference_release_year` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `release_year_weighting` to the `Preference` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "release_year" INTEGER NOT NULL,
DROP COLUMN "release_date",
ADD COLUMN     "release_date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Preference" DROP COLUMN "preference_release_date",
DROP COLUMN "release_date_weighting",
ADD COLUMN     "preference_release_year" TEXT NOT NULL,
ADD COLUMN     "release_year_weighting" INTEGER NOT NULL;
