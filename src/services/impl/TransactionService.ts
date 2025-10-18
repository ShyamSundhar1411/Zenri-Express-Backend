import prismaClient from "../../config/prismaClient"
import { ServiceResult } from "../../domain/interfaces"
import {
  Transactions,
  TransactionCreateRequest,
  Transaction,
  TransactionSchema
} from "../../domain/transactionSchema"
import { ITransactionService } from "../ITransactionService"

export class TransactionService implements ITransactionService {
  async getTransactionById(
    userId: string,
    transactionId: string
  ): Promise<ServiceResult<Transaction>> {
    try {
      const transaction = await prismaClient.transaction.findUnique({
        where: {
          id: transactionId,
          userId: userId
        }
      })
      return {
        data: TransactionSchema.parse(transaction),
        statusCode: 200
      }
    } catch (error: any) {
      return {
        error: error.message || error,
        statusCode: 400
      }
    }
  }
  async getMyTransactions(
    userId: string
  ): Promise<ServiceResult<Transactions>> {
    try {
      const transactions = await prismaClient.transaction.findMany({
        where: {
          userId: userId
        }
      })
      return {
        data: transactions.map((transaction) =>
          TransactionSchema.parse(transaction)
        ),
        statusCode: 200
      }
    } catch (error: any) {
      return {
        error: error.message || error,
        statusCode: 400
      }
    }
  }
  async createTransaction(
    userId: string,
    transactionData: TransactionCreateRequest
  ): Promise<ServiceResult<Transaction>> {
    try {
      const transactionDate = transactionData.transactedOn
        ? new Date(transactionData.transactedOn)
        : new Date()
      if (isNaN(transactionDate.getTime())) {
        return {
          error: "Invalid date format in transactedOn",
          statusCode: 400
        }
      }
      const monthName = transactionDate.toLocaleString("default", {
        month: "long"
      })
      const year = transactionDate.getFullYear().toString()
      let ledger = await prismaClient.ledger.findFirst({
        where: {
          userId: userId,
          month: monthName,
          year: year
        }
      })
      if (!ledger) {
        ledger = await prismaClient.ledger.create({
          data: {
            userId: userId,
            month: monthName,
            year: year
          }
        })
      }
      const transaction = await prismaClient.transaction.create({
        data: {
          amount: transactionData.amount,
          ledgerId: ledger.id,
          userId: userId,
          currencyCode: transactionData.currencyCode,
          transactionType: transactionData.transactionType,
          description: transactionData.description,
          categoryId: transactionData.categoryId,
          paymentMethodId: transactionData.paymentMethodId,
          transactedOn: transactionData.transactedOn
        }
      })
      return {
        data: TransactionSchema.parse(transaction),
        statusCode: 201
      }
    } catch (error: any) {
      return {
        error: error.message || error,
        statusCode: 400
      }
    }
  }
}
