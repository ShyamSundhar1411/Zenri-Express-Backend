import prismaClient from "../../config/prismaClient";
import { RepoError, RepoResult } from "../../domain/interfaces";
import { Transaction } from "../../generated/client"
import { Prisma } from "../../generated";
import { ITransactionRepository } from "../ITransactionRepository";
import { TransactionCreateRequest } from "../../domain/transaction";
import { processTransaction, reverseTransaction } from "../../utils/transactionUtils";

export class TransactionRepository implements ITransactionRepository {
    
    private db = prismaClient;
    private async _initiateTransaction(
        tx: Prisma.TransactionClient,
        userId: string,
        transactionData: TransactionCreateRequest
    ) {
        const transactionDate = transactionData.transactedOn
            ? new Date(transactionData.transactedOn)
            : new Date();

        if (isNaN(transactionDate.getTime())) {
            throw new Error("Invalid date format in transactedOn");
        }

        const monthName = transactionDate.toLocaleString("default", {
            month: "long",
        });

        const year = transactionDate.getFullYear().toString();

        let ledger = await tx.ledger.findFirst({
            where: {
                userId,
                month: monthName,
                year,
            },
        });

        if (!ledger) {
            ledger = await tx.ledger.create({
                data: {
                    userId,
                    month: monthName,
                    year,
                },
            });
        }

        await processTransaction(
            tx,
            transactionData.paymentMethodId,
            transactionData.amount,
            transactionData.transactionType
        );

        return await tx.transaction.create({
            data: {
                amount: transactionData.amount,
                ledgerId: ledger.id,
                userId,
                currencyCode: transactionData.currencyCode,
                transactionType: transactionData.transactionType,
                subscriptionId:
                    transactionData.subscriptionId?.trim() || null,
                description: transactionData.description,
                categoryId: transactionData.categoryId,
                paymentMethodId: transactionData.paymentMethodId,
                transactedOn: transactionDate,
            },
            include: {
                category: true,
                paymentMethod: {
                    include: {
                        paymentMethodType: true,
                    },
                },
            },
        });
    }
    async getTransactionById(transactionId: string, userId: string, include: Prisma.TransactionInclude | null): Promise<RepoResult<Transaction>> {
        try {
            const transaction = await this.db.transaction.findFirst({
                where: {
                    id: transactionId,
                    userId: userId
                },
                include: include
            })
            if (!transaction) {
                return {
                    errorType: RepoError.NOT_FOUND,
                    error: "Transaction not found"
                }
            }
            return {
                data: transaction,

            }
        } catch (error: any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR

            }
        }
    }
    async getMyTransactions(userId: string, include: Prisma.TransactionInclude | null, orderBy: Prisma.TransactionOrderByWithRelationInput): Promise<RepoResult<Transaction[]>> {
        try {
            const transactions = await this.db.transaction.findMany({
                where: {
                    userId: userId
                },
                include: include,
                orderBy: orderBy
            })
            return {
                data: transactions
            }
        } catch (error: any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR

            }
        }
    }
    async getTransactionsByLedgerId(userId: string, ledgerId: string, include: Prisma.TransactionInclude | null): Promise<RepoResult<Transaction[]>> {
        try {
            const transactions = await this.db.transaction.findMany({
                where: {
                    ledgerId: ledgerId,
                    userId: userId
                },
                include: include,
            })
            return {
                data: transactions
            }
        } catch (error: any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }
    async createTransaction(
        userId: string,
        transactionData: TransactionCreateRequest
    ): Promise<RepoResult<Transaction>> {

        try {
            const transaction = await this.db.$transaction((tx) =>
                this._initiateTransaction(tx, userId, transactionData)
            );
            return {
                data: transaction
            }
        } catch (error: any) {
            return {
                errorType: RepoError.DB_ERROR,
                error: error.message || error
            }
        }
    }
    async updateTransaction(userId: string, transactionId: string, transactionData: TransactionCreateRequest): Promise<RepoResult<Transaction>> {
        try {
            const existingTransaction = await this.db.transaction.findFirst({
                where: {
                    id: transactionId,
                    userId: userId
                }
            })
            if (!existingTransaction) {
                return {
                    errorType: RepoError.NOT_FOUND,
                    error: "Transaction not found"
                }
            }
            const oldAmount = existingTransaction.amount.toNumber()
            const newAmount = transactionData.amount
            const performReverse = oldAmount !== newAmount || transactionData.paymentMethodId !== existingTransaction.paymentMethodId || transactionData.transactionType !== existingTransaction.transactionType
            const updatedTransaction = await this.db.$transaction(
                async (tx) => {
                    if (performReverse) {
                        await reverseTransaction(tx, existingTransaction.paymentMethodId!, oldAmount, existingTransaction.transactionType)
                        await processTransaction(tx, transactionData.paymentMethodId, newAmount, transactionData.transactionType)

                    }
                    return await tx.transaction.update({
                        where: {
                            id: transactionId
                        },
                        data: {
                            amount: transactionData.amount,
                            transactionType: transactionData.transactionType,
                            currencyCode: transactionData.currencyCode,
                            categoryId: transactionData.categoryId,
                            paymentMethodId: transactionData.paymentMethodId,
                            ...(transactionData.subscriptionId !== undefined && {
                                subscriptionId: transactionData.subscriptionId
                            }),
                            transactedOn: transactionData.transactedOn,
                            description: transactionData.description,

                        }
                    })
                }

            )

            return {
                data: updatedTransaction
            }
        } catch (error: any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }
    async createBulkTransactions(userId: string, transactions: TransactionCreateRequest[]): Promise<RepoResult<Transaction[]>> {
        try {
            const createdTransactions = await this.db.$transaction(
                async (tx) => {
                    const results: Transaction[] = [];
                    for (const transactionData of transactions) {
                        const transaction = await this._initiateTransaction(tx, userId, transactionData)
                        results.push(transaction)
                    }
                    return results;
                }
            );

            return {
                data: createdTransactions,
            };
        } catch (error: any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR,
            };
        }
    }

}