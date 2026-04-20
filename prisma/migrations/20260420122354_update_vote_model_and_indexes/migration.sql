/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `isDeleted` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `votes` table. All the data in the column will be lost.
  - You are about to drop the column `isDeleted` on the `votes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "payments" DROP COLUMN "deletedAt",
DROP COLUMN "isDeleted";

-- AlterTable
ALTER TABLE "votes" DROP COLUMN "deletedAt",
DROP COLUMN "isDeleted";

-- CreateIndex
CREATE INDEX "idx_category_isDeleted" ON "categories"("isDeleted");

-- CreateIndex
CREATE INDEX "idx_comment_isDeleted" ON "comments"("isDeleted");

-- CreateIndex
CREATE INDEX "idx_idea_isDeleted" ON "ideas"("isDeleted");

-- CreateIndex
CREATE INDEX "idx_user_isDeleted" ON "users"("isDeleted");
