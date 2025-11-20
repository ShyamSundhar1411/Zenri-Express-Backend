-- AlterTable
ALTER TABLE "public"."CreditCard" ADD COLUMN     "cardHolderName" TEXT;

-- AlterTable
ALTER TABLE "public"."DebitCard" ADD COLUMN     "cardHolderName" TEXT;

-- AlterTable
ALTER TABLE "public"."Subscription" ADD COLUMN     "categoryId" TEXT;

-- AddForeignKey
ALTER TABLE "public"."Subscription" ADD CONSTRAINT "Subscription_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
