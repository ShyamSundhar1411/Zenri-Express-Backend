/*
  Warnings:

  - You are about to drop the column `susbcriptionName` on the `Subscription` table. All the data in the column will be lost.
  - Added the required column `subscriptionName` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Subscription" DROP COLUMN "susbcriptionName",
ADD COLUMN     "subscriptionName" TEXT NOT NULL;
