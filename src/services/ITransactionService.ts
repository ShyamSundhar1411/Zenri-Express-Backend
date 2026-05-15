import { ServiceResult } from "../domain/interfaces"
import {
  Transaction,
  TransactionCreateRequest,
  TransactionCsvRow,
  TransactionDetail,
  Transactions,
  TransactionUpdateRequest
} from "../domain/transaction"

export interface ITransactionService {
  getMyTransactions(userId: string): Promise<ServiceResult<Transactions>>
  getTransactionById(
    userId: string,
    transactionId: string
  ): Promise<ServiceResult<Transaction>>
  getTransactionsByLedgerId(
    userId: string,
    ledgerId: string
  ): Promise<ServiceResult<TransactionDetail>>
  createTransaction(
    userId: string,
    transactionData: TransactionCreateRequest
  ): Promise<ServiceResult<Transaction>>

  updateTransaction(
    userId: string,
    transactionId: string,
    transactionData: TransactionUpdateRequest
  ): Promise<ServiceResult<Transaction>>

  createBulkTransaction(
    userId: string,
    transactions: TransactionCsvRow[]
  ): Promise<ServiceResult<Transaction[]>>
}
