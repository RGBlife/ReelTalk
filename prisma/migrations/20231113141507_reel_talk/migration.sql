/*
  Warnings:

  - You are about to drop the column `genre_a_weighting` on the `Preference` table. All the data in the column will be lost.
  - You are about to drop the column `genre_b_weighting` on the `Preference` table. All the data in the column will be lost.
  - You are about to drop the column `imdb_rating_weighting` on the `Preference` table. All the data in the column will be lost.
  - You are about to drop the column `preference_genre_a` on the `Preference` table. All the data in the column will be lost.
  - You are about to drop the column `preference_genre_b` on the `Preference` table. All the data in the column will be lost.
  - You are about to drop the column `preference_imdb_rating` on the `Preference` table. All the data in the column will be lost.
  - You are about to drop the column `preference_release_year` on the `Preference` table. All the data in the column will be lost.
  - You are about to drop the column `release_year_weighting` on the `Preference` table. All the data in the column will be lost.
  - Added the required column `action` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adventure` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `animation` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comedy` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `crime` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `documentary` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drama` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `family` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fantasy` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `history` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horror` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imdb_rating` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `music` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mystery` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `release_year` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `romance` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `science_fiction` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thriller` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tv_movie` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `war` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `western` to the `Preference` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Preference" DROP COLUMN "genre_a_weighting",
DROP COLUMN "genre_b_weighting",
DROP COLUMN "imdb_rating_weighting",
DROP COLUMN "preference_genre_a",
DROP COLUMN "preference_genre_b",
DROP COLUMN "preference_imdb_rating",
DROP COLUMN "preference_release_year",
DROP COLUMN "release_year_weighting",
ADD COLUMN     "action" INTEGER NOT NULL,
ADD COLUMN     "adventure" INTEGER NOT NULL,
ADD COLUMN     "animation" INTEGER NOT NULL,
ADD COLUMN     "comedy" INTEGER NOT NULL,
ADD COLUMN     "crime" INTEGER NOT NULL,
ADD COLUMN     "documentary" INTEGER NOT NULL,
ADD COLUMN     "drama" INTEGER NOT NULL,
ADD COLUMN     "family" INTEGER NOT NULL,
ADD COLUMN     "fantasy" INTEGER NOT NULL,
ADD COLUMN     "history" INTEGER NOT NULL,
ADD COLUMN     "horror" INTEGER NOT NULL,
ADD COLUMN     "imdb_rating" INTEGER NOT NULL,
ADD COLUMN     "music" INTEGER NOT NULL,
ADD COLUMN     "mystery" INTEGER NOT NULL,
ADD COLUMN     "release_year" TEXT NOT NULL,
ADD COLUMN     "romance" INTEGER NOT NULL,
ADD COLUMN     "science_fiction" INTEGER NOT NULL,
ADD COLUMN     "thriller" INTEGER NOT NULL,
ADD COLUMN     "tv_movie" INTEGER NOT NULL,
ADD COLUMN     "war" INTEGER NOT NULL,
ADD COLUMN     "western" INTEGER NOT NULL;
