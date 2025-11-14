import prismaClient from "../../config/prismaClient"
import { ServiceResult } from "../../domain/interfaces"
import {
  Transactions,
  TransactionCreateRequest,
  Transaction,
  TransactionSchema
} from "../../domain/transactionSchema"
import { processTransaction } from "../../utils/transactionUtils"
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
  async getTransactionsByLedgerId(
    userId: string,
    ledgerId: string
  ): Promise<ServiceResult<Transactions>> {
    try {
      const transactions = await prismaClient.transaction.findMany({
        where: {
          userId: userId,
          ledgerId: ledgerId
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

        await processTransaction(tx,transactionData.paymentMethodId,transactionData.amount,transactionData.transactionType)
        const transaction = await tx.transaction.create({
          data: {
            amount: transactionData.amount,
            ledgerId: ledger.id,
            userId,
            currencyCode: transactionData.currencyCode,
            transactionType: transactionData.transactionType,
            description: transactionData.description,
            categoryId: transactionData.categoryId,
            paymentMethodId: transactionData.paymentMethodId,
            transactedOn: transactionData.transactedOn,
          },
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
