/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Coins` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Coins` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Coins` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Coins" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "value";

-- CreateTable
CREATE TABLE "prices" (
    "id" TEXT NOT NULL,
    "coinId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "prices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "prices_id_key" ON "prices"("id");

-- CreateIndex
CREATE UNIQUE INDEX "prices_coinId_key" ON "prices"("coinId");

-- AddForeignKey
ALTER TABLE "prices" ADD CONSTRAINT "prices_coinId_fkey" FOREIGN KEY ("coinId") REFERENCES "Coins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
