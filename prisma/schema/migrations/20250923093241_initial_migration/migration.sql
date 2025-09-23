-- CreateEnum
CREATE TYPE "public"."AccountStatus" AS ENUM ('ACTIVE', 'CLOSED', 'FROZEN', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "public"."CardStatus" AS ENUM ('ACTIVE', 'BLOCKED', 'EXPIRED');

-- CreateTable
CREATE TABLE "public"."AccountType" (
    "id" TEXT NOT NULL,
    "accountTypeName" TEXT NOT NULL,
    "isDisabled" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AccountType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CardNetwork" (
    "id" TEXT NOT NULL,
    "networkName" TEXT NOT NULL,
    "isDisabled" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CardNetwork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BankAccount" (
    "id" TEXT NOT NULL,
    "accountNumber" VARCHAR(20) NOT NULL,
    "accountTypeId" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "balance" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
    "userId" TEXT NOT NULL,
    "status" "public"."AccountStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BankAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CreditCard" (
    "id" TEXT NOT NULL,
    "cardNumber" VARCHAR(19) NOT NULL,
    "networkId" TEXT NOT NULL,
    "issuer" TEXT NOT NULL,
    "limit" DECIMAL(65,30) NOT NULL,
    "balance" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "public"."CardStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CreditCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DebitCard" (
    "id" TEXT NOT NULL,
    "cardNumber" VARCHAR(19) NOT NULL,
    "networkId" TEXT NOT NULL,
    "bankAccountId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "status" "public"."CardStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DebitCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isDisabled" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AccountType_accountTypeName_key" ON "public"."AccountType"("accountTypeName");

-- CreateIndex
CREATE UNIQUE INDEX "CardNetwork_networkName_key" ON "public"."CardNetwork"("networkName");

-- CreateIndex
CREATE UNIQUE INDEX "BankAccount_accountNumber_key" ON "public"."BankAccount"("accountNumber");

-- CreateIndex
CREATE INDEX "BankAccount_userId_idx" ON "public"."BankAccount"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "BankAccount_accountNumber_bankName_key" ON "public"."BankAccount"("accountNumber", "bankName");

-- CreateIndex
CREATE UNIQUE INDEX "CreditCard_cardNumber_key" ON "public"."CreditCard"("cardNumber");

-- CreateIndex
CREATE INDEX "CreditCard_userId_idx" ON "public"."CreditCard"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "DebitCard_cardNumber_key" ON "public"."DebitCard"("cardNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "public"."User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."BankAccount" ADD CONSTRAINT "BankAccount_accountTypeId_fkey" FOREIGN KEY ("accountTypeId") REFERENCES "public"."AccountType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BankAccount" ADD CONSTRAINT "BankAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CreditCard" ADD CONSTRAINT "CreditCard_networkId_fkey" FOREIGN KEY ("networkId") REFERENCES "public"."CardNetwork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CreditCard" ADD CONSTRAINT "CreditCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DebitCard" ADD CONSTRAINT "DebitCard_networkId_fkey" FOREIGN KEY ("networkId") REFERENCES "public"."CardNetwork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DebitCard" ADD CONSTRAINT "DebitCard_bankAccountId_fkey" FOREIGN KEY ("bankAccountId") REFERENCES "public"."BankAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
