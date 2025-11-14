import { ServiceResult } from "../domain/interfaces"
import {
  Transaction,
  TransactionCreateRequest,
  Transactions
} from "../domain/transactionSchema"

export interface ITransactionService {
  getMyTransactions(userId: string): Promise<ServiceResult<Transactions>>
  getTransactionById(
    userId: string,
    transactionId: string
  ): Promise<ServiceResult<Transaction>>
  getTransactionsByLedgerId(
    userId: string,
    ledgerId: string
  ): Promise<ServiceResult<Transactions>>
  createTransaction(
    userId: string,
    transactionData: TransactionCreateRequest
  ): Promise<ServiceResult<Transaction>>
}
