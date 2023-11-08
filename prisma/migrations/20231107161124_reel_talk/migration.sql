/*
  Warnings:

  - You are about to drop the column `author` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `to_watch_list_public` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `watched_list_public` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Reccomendation` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `author_id` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_watch_list_public` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_watched_list_public` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reccomendation" DROP CONSTRAINT "Reccomendation_movie_id_fkey";

-- DropForeignKey
ALTER TABLE "Reccomendation" DROP CONSTRAINT "Reccomendation_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_user_id_fkey";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "author",
DROP COLUMN "user_id",
ADD COLUMN     "author_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar",
DROP COLUMN "to_watch_list_public",
DROP COLUMN "watched_list_public",
ADD COLUMN     "avatar_url" TEXT,
ADD COLUMN     "is_watch_list_public" BOOLEAN NOT NULL,
ADD COLUMN     "is_watched_list_public" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "Reccomendation";

-- CreateTable
CREATE TABLE "Recommendation" (
    "user_id" INTEGER NOT NULL,
    "movie_id" INTEGER NOT NULL,
    "score" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Recommendation_user_id_movie_id_key" ON "Recommendation"("user_id", "movie_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recommendation" ADD CONSTRAINT "Recommendation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recommendation" ADD CONSTRAINT "Recommendation_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
