import { ServiceResult } from "../domain/interfaces"
import { Ledger, LedgerCreateRequest, Ledgers } from "../domain/ledger"

export interface ILedgerService {
  getMyLedgers(userId: string): Promise<ServiceResult<Ledgers>>
  getLedgerById(
    userId: string,
    ledgerId: string
  ): Promise<ServiceResult<Ledger>>
  createLedger(
    userId: string,
    ledgerData: LedgerCreateRequest
  ): Promise<ServiceResult<Ledger>>
}
