/*
  Warnings:

  - You are about to alter the column `price` on the `ideas` table. The data in that column could be lost. The data in that column will be cast from `Money` to `Decimal(8,2)`.
  - You are about to alter the column `amount` on the `payments` table. The data in that column could be lost. The data in that column will be cast from `Money` to `Decimal(8,2)`.

*/
-- AlterTable
ALTER TABLE "ideas" ALTER COLUMN "price" SET DATA TYPE DECIMAL(8,2);

-- AlterTable
ALTER TABLE "payments" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(8,2);
