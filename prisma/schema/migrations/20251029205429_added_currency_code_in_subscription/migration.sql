/*
  Warnings:

  - Added the required column `currencyCode` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Subscription" ADD COLUMN     "currencyCode" TEXT NOT NULL;
