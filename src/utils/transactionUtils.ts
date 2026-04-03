

import {  Prisma,PrismaClient, TransactionType } from "../generated";

async function updateBalance(
    tx: Prisma.TransactionClient,
    model: "bankAccount" | "debitCard" | "creditCard",
    id: string,
    amount: number,
    transactionType: TransactionType
) {

    const isDebit = transactionType === TransactionType.DEBIT
    if (model === "creditCard") {
        await tx.creditCard.update({
            where: { id },
            data: {
                limit: {
                    [isDebit ? "increment" : "decrement"]: amount,
                }
            }
        })
    }
    else if (model === "debitCard") {
        const debitCard = await tx.debitCard.findUnique({
            where: { id },
            select: { bankAccountId: true },
        })
        if (!debitCard?.bankAccountId) {
            throw new Error("Debit card not linked to any bank account")
        }
        await tx.bankAccount.update({
            where: { id: debitCard.bankAccountId },
            data: {
                balance: {
                    [isDebit ? "decrement" : "increment"]: amount
                }
            }
        })
    }
    else {
        await tx.bankAccount.update({
            where: { id },
            data: {
                balance: {
                    [isDebit ? "decrement" : "increment"]: amount
                }
            }
        })
    }

}

export async function processTransaction(tx: Prisma.TransactionClient,paymentMethodId: string, amount: number, transactionType: TransactionType) {
    const paymentMethod = await tx.paymentMethod.findUnique({
        where: { id: paymentMethodId },
        include: {
            paymentMethodType: true,
            bankAccount: true,
            debitCard: true,
            creditCard: true,
        },
    })
    if (!paymentMethod) throw new Error("Invalid payment method")
    if (paymentMethod.bankAccountId) {
        await updateBalance(tx,"bankAccount", paymentMethod.bankAccountId, amount, transactionType)
    } else if (paymentMethod.debitCardId) {
        await updateBalance(tx,"debitCard", paymentMethod.debitCardId, amount, transactionType)
    } else if (paymentMethod.creditCardId) {
        await updateBalance(tx,"creditCard", paymentMethod.creditCardId, amount, transactionType)
    } else {
        throw new Error("Unsupported payment method type")
    }
}

export async function reverseTransaction(tx: Prisma.TransactionClient,paymentMethodId: string, amount: number, transactionType: TransactionType) {
    const reversedType = transactionType === TransactionType.DEBIT ? TransactionType.CREDIT : TransactionType.DEBIT
    await processTransaction(tx, paymentMethodId, amount, reversedType)
}

export async function updateTransactionBalance(
    tx: Prisma.TransactionClient,
    paymentMethodId: string,
    oldAmount: number,
    newAmount: number,
){
    if (oldAmount === newAmount) return;
    const amountDifference = newAmount - oldAmount;
    const isIncrease = amountDifference > 0;
    const effectiveTransactionType = isIncrease ? TransactionType.DEBIT : TransactionType.CREDIT;
    await processTransaction(tx, paymentMethodId, Math.abs(amountDifference), effectiveTransactionType)
}