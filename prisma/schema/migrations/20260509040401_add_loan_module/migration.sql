-- CreateEnum
CREATE TYPE "LoanStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'REPAID', 'CLOSED', 'DEFAULTED');

-- CreateEnum
CREATE TYPE "InterestRateType" AS ENUM ('FIXED', 'FLOATING');

-- CreateEnum
CREATE TYPE "MoratoriumInterestType" AS ENUM ('SIMPLE', 'COMPOUND', 'NONE');

-- CreateTable
CREATE TABLE "LoanType" (
    "id" TEXT NOT NULL,
    "loanTypeName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LoanType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loan" (
    "id" TEXT NOT NULL,
    "loanName" TEXT NOT NULL,
    "loanTypeId" TEXT NOT NULL,
    "sanctionedAmount" DECIMAL(65,30) NOT NULL,
    "drawableLimit" DECIMAL(65,30),
    "currencyCode" TEXT NOT NULL,
    "interestRate" DECIMAL(65,30) NOT NULL,
    "interestRateType" "InterestRateType" NOT NULL,
    "marginPercentage" DECIMAL(65,30) NOT NULL,
    "moratoriumMonths" INTEGER NOT NULL,
    "repaymentMonths" INTEGER,
    "totalTenureMonths" INTEGER,
    "moratoriumInterestType" "MoratoriumInterestType",
    "sanctionDate" TIMESTAMP(3),
    "applicationDate" TIMESTAMP(3),
    "sanctionValidUntil" TIMESTAMP(3),
    "processingFee" DECIMAL(65,30),
    "insurancePremium" DECIMAL(65,30),
    "notes" TEXT,
    "userId" TEXT NOT NULL,
    "status" "LoanStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LoanType_loanTypeName_key" ON "LoanType"("loanTypeName");

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_loanTypeId_fkey" FOREIGN KEY ("loanTypeId") REFERENCES "LoanType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
