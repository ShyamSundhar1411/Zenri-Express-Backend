import { ServiceResult } from "../domain/interfaces";
import { Transaction, TransactionCreateRequest, Transactions } from "../domain/transactionSchema";

export interface ITransactionService{
    getMyTransactions(userId: string): Promise<ServiceResult<Transactions>>
    getTransactionById(transactionId: string): Promise<ServiceResult<Transaction>>
    createTransaction(userId: string, transactionData: TransactionCreateRequest): Promise<ServiceResult<Transaction>>
}