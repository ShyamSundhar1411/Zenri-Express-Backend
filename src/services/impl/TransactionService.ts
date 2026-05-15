import prismaClient from "../../config/prismaClient"
import { RepoError, ServiceResult } from "../../domain/interfaces"
import {
  Transactions,
  TransactionCreateRequest,
  Transaction,
  TransactionSchema,
  TransactionsSchema,
  CategoryBreakdown,
  TransactionDetail,
  CategoryBreakdownSchema,
  CategoriesBreakdownSchema,
  TransactionUpdateRequest
} from "../../domain/transaction"
import { TransactionRepository } from "../../repository/impl/TransactionRepository"
import { ITransactionService } from "../ITransactionService"
import { TransactionCsvRow } from "../../domain/transaction";

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
  _computerCategoryBreakDown(transactions: Transaction[]): CategoryBreakdown[] {
    const categoryMap = new Map<string, CategoryBreakdown>();
    let totalSum = 0
    transactions.forEach((transaction) => {
      const existing = categoryMap.get(transaction.categoryId)
      totalSum += transaction.amount.toNumber()
      if (existing) {
        existing.totalAmount += transaction.amount.toNumber()
        existing.transactionCount += 1
      }
      else {
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
    })).sort(
      (a, b) => b.percentage - a.percentage
    )
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
    const repoResult = await this.transactionRepository.createTransaction(
      userId,
      transactionData
    )
    if (repoResult.error) {
      if (repoResult.errorType === RepoError.NOT_FOUND) {
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
      statusCode: 201
    }
  }
  async updateTransaction(userId: string, transactionId: string, transactionData: TransactionUpdateRequest): Promise<ServiceResult<Transaction>> {
    const repoResult = await this.transactionRepository.updateTransaction(
      userId,
      transactionId,
      transactionData
    )
    if (repoResult.error) {
      if (repoResult.errorType === RepoError.NOT_FOUND) {
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
  async createBulkTransaction(userId: string, transactions: TransactionCsvRow[]): Promise<ServiceResult<Transaction[]>> {
    if (transactions.length === 0) {
      return {
        error: "No transactions provided",
        statusCode: 400
      }

    }
    // const repoResult = await this.transactionRepository.createBulkTransactions(
    //   userId,
    //   transactions
    // )
    if (repoResult.error) {
      return {
        error: repoResult.error,
        statusCode: 400,
      };
    }

    return {
      data: TransactionsSchema.parse(repoResult.data),
      statusCode: 201,
    };

  }
}
