import prismaClient from "../../config/prismaClient"
import { RepoError, ServiceResult } from "../../domain/interfaces"
import {
  Ledger,
  LedgerCreateRequest,
  Ledgers,
  LedgerSchema,
  LedgersSchema,
  PrismaLedgerWithTransactions,
  TransactionMetadata
} from "../../domain/ledger"
import { Transaction } from "../../generated/client"

import { LedgerRepository } from "../../repository/impl/LedgerRepository"
import { ILedgerService } from "../ILedgerService"

export class LedgerService implements ILedgerService {
  private ledgerRepository = new LedgerRepository()
  async getLedgerById(
    userId: string,
    ledgerId: string
  ): Promise<ServiceResult<Ledger>> {
    const repoResult = await this.ledgerRepository.getLedgerById(userId, ledgerId)
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
      data: LedgerSchema.parse(repoResult.data),
      statusCode: 200
    }
  }
  _computeTransactionMetadata(ledger: PrismaLedgerWithTransactions): TransactionMetadata {
    const credits = ledger.transactions.filter((t: Transaction) => t.transactionType === "CREDIT");
    const debits = ledger.transactions.filter((t: Transaction) => t.transactionType === "DEBIT");


    const totalCredits = Number(credits.reduce((sum, t: Transaction) => sum + t.amount.toNumber(), 0).toFixed(2));
    const totalDebits = Number(debits.reduce((sum, t: Transaction) => sum + t.amount.toNumber(), 0).toFixed(2));

    const netBalance = Number((totalCredits - totalDebits).toFixed(2));
    const totalSavings = netBalance > 0 ? netBalance : 0;

    const total = totalCredits + totalDebits;

    return {
      transactions: ledger.transactions.length,
      netBalance,
      totalCredits,
      totalDebits,
      totalSavings,
      totalSavingsPercentage: total === 0 ? 0 : Number(((totalSavings / total) * 100).toFixed(2)),
      totalCreditsPercentage: total === 0 ? 0 : Number(((totalCredits / total) * 100).toFixed(2)),
      totalDebitsPercentage: total === 0 ? 0 : Number(((totalDebits / total) * 100).toFixed(2)),
      currencyCode: ledger.transactions[0]?.currencyCode || "INR"

    };
  }
  async getMyLedgers(userId: string): Promise<ServiceResult<Ledgers>> {
    const repoResult = await this.ledgerRepository.getMyLedgers(userId,
      {
        transactions: true
      }
    )
    if (repoResult.error) {
      return {
        error: repoResult.error,
        statusCode: 400
      }
    }
    const ledgers = repoResult.data as PrismaLedgerWithTransactions[];

    
    const enrichedLedgers = ledgers.map(ledger => ({
      ...ledger,
      transactionMetadata: this._computeTransactionMetadata(ledger)
    }));
    return {
      data: LedgersSchema.parse(enrichedLedgers),
      statusCode: 200
    }

  }

  async createLedger(
    userId: string,
    ledgerData: LedgerCreateRequest
  ): Promise<ServiceResult<Ledger>> {
    const repoResult = await this.ledgerRepository.createLedger(
      userId,
      ledgerData
    )
    if (repoResult.error) {
      return {
        error: repoResult.error,
        statusCode: 400
      }
    }
    return {
      data: LedgerSchema.parse(repoResult.data),
      statusCode: 200
    }
  }
}
