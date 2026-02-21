import prismaClient from "../../config/prismaClient"
import { ServiceResult } from "../../domain/interfaces"
import {
  Transactions,
  TransactionCreateRequest,
  Transaction,
  TransactionSchema,
  TransactionsSchema,
  CategoryBreakdown,
  TransactionDetail,
  CategoryBreakdownSchema,
  CategoriesBreakdownSchema
} from "../../domain/transaction"
import { TransactionRepository } from "../../repository/impl/TransactionRepository"
import { processTransaction } from "../../utils/transactionUtils"
import { ITransactionService } from "../ITransactionService"

export class TransactionService implements ITransactionService {
  private transactionRepository = new TransactionRepository()
  async getTransactionById(
    userId: string,
    transactionId: string
  ): Promise<ServiceResult<Transaction>> {
    const repoResult = await this.transactionRepository.getTransactionById(
      transactionId,
      userId,
      {
        category: true,
        paymentMethod: {
          include: {
            paymentMethodType: true
          }
        }
      }
    )
    if (repoResult.error) {
      if (repoResult.errorType === "NOT_FOUND") {
        return {
          error: repoResult.error,
          statusCode: 404
        }
      }
      return {
        error: repoResult.error,
        statusCode: 400

      }
    }
    return {
      data: TransactionSchema.parse(repoResult.data),
      statusCode: 200
    }
  }
  async getMyTransactions(
    userId: string
  ): Promise<ServiceResult<Transactions>> {
    const repoResult = await this.transactionRepository.getMyTransactions(
      userId,
      {
        category: true,
        paymentMethod: {
          include: {
            paymentMethodType: true
          }
        }
      },
      {
        transactedOn: "desc"
      }
    )
    if (repoResult.error) {
      return {
        error: repoResult.error,
        statusCode: 400
      }
    }
    return {
      data: TransactionsSchema.parse(repoResult.data),
      statusCode: 200
    }
  }
  _computerCategoryBreakDown(transactions: Transaction[]): CategoryBreakdown[]{
    const categoryMap = new Map<string, CategoryBreakdown>();
    let totalSum = 0
    transactions.forEach((transaction) => {
      const existing = categoryMap.get(transaction.categoryId)
      if(existing){
        existing.totalAmount += transaction.amount.toNumber()
        existing.transactionCount += 1
      }
      else{
        categoryMap.set(transaction.categoryId, {
          categoryName: transaction.category.categoryName,
          totalAmount: transaction.amount.toNumber(),
          currencyCode: transaction.currencyCode,
          transactionCount: 1,
          percentage: 0
        })
      }
    })
    const breakDown: CategoryBreakdown[] = Array.from(
      categoryMap.values(

      )
    ).map((item) => ({
      ...item,
      percentage: totalSum > 0 ? Number(((item.totalAmount / totalSum) * 100).toFixed(2)) : 0,
    }))
    return breakDown;

  }
  async getTransactionsByLedgerId(
    userId: string,
    ledgerId: string
  ): Promise<ServiceResult<TransactionDetail>> {
    const repoResult = await this.transactionRepository.getTransactionsByLedgerId(
      userId,
      ledgerId,
      {
        category: true,
        paymentMethod: {
          include: {
            paymentMethodType: true
          }
        }
      },
    )
    if (repoResult.error) {
      return {
        error: repoResult.error,
        statusCode: 400
      }
    }
    const transactions = TransactionsSchema.parse(repoResult.data)
    const categoryBreakdown = this._computerCategoryBreakDown(transactions)
    return {
      data: {
        
        transactions: TransactionsSchema.parse(repoResult.data),
        categoryBreakdown: CategoriesBreakdownSchema.parse(categoryBreakdown)

      },
      statusCode: 200
    }
  } catch(error: any) {
    return {
      error: error.message || error,
      statusCode: 400
    }
  }

  async createTransaction(
    userId: string,
    transactionData: TransactionCreateRequest
  ): Promise<ServiceResult<Transaction>> {
    try {
      const result = await prismaClient.$transaction(async (tx) => {
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

        await processTransaction(tx, transactionData.paymentMethodId, transactionData.amount, transactionData.transactionType)
        const transaction = await tx.transaction.create({
          data: {
            amount: transactionData.amount,
            ledgerId: ledger.id,
            userId,
            currencyCode: transactionData.currencyCode,
            transactionType: transactionData.transactionType,
            subscriptionId:
              transactionData.subscriptionId && transactionData.subscriptionId.trim() !== ""
                ? transactionData.subscriptionId
                : null,
            description: transactionData.description,
            categoryId: transactionData.categoryId,
            paymentMethodId: transactionData.paymentMethodId,
            transactedOn: new Date(transactionData.transactedOn),
          },
          include: {
            category: true,
            paymentMethod: {
              include: {
                paymentMethodType: true
              }
            }
          }
        });

        return transaction;
      });

      return {
        data: TransactionSchema.parse(result),
        statusCode: 201,
      };
    } catch (error: any) {
      return {
        error: error.message || error,
        statusCode: 400,
      };
    }
  }

}
