import prismaClient from "../../config/prismaClient"
import { ServiceResult } from "../../domain/interfaces"
import {
  Ledger,
  LedgerCreateRequest,
  Ledgers,
  LedgerSchema,
  LedgersSchema
} from "../../domain/ledger"
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
      data: LedgerSchema.parse(repoResult.data),
      statusCode: 200
    }
  }

  async getMyLedgers(userId: string): Promise<ServiceResult<Ledgers>> {
    const repoResult = await this.ledgerRepository.getMyLedgers(userId, null)
    if (repoResult.error) {
      return {
        error: repoResult.error,
        statusCode: 400
      }
    }
    return {
      data: LedgersSchema.parse(repoResult.data),
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
