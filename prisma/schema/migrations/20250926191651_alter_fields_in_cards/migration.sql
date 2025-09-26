/*
  Warnings:

  - You are about to drop the column `networkId` on the `CreditCard` table. All the data in the column will be lost.
  - You are about to drop the column `networkId` on the `DebitCard` table. All the data in the column will be lost.
  - Added the required column `cardNetworkId` to the `CreditCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardNetworkId` to the `DebitCard` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."CreditCard" DROP CONSTRAINT "CreditCard_networkId_fkey";

-- DropForeignKey
ALTER TABLE "public"."DebitCard" DROP CONSTRAINT "DebitCard_networkId_fkey";

-- AlterTable
ALTER TABLE "public"."CreditCard" DROP COLUMN "networkId",
ADD COLUMN     "cardNetworkId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."DebitCard" DROP COLUMN "networkId",
ADD COLUMN     "cardNetworkId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."CreditCard" ADD CONSTRAINT "CreditCard_cardNetworkId_fkey" FOREIGN KEY ("cardNetworkId") REFERENCES "public"."CardNetwork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DebitCard" ADD CONSTRAINT "DebitCard_cardNetworkId_fkey" FOREIGN KEY ("cardNetworkId") REFERENCES "public"."CardNetwork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
