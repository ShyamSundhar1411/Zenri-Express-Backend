import { RepoResult } from "../domain/interfaces";
import { TransactionCreateRequest } from "../domain/transaction";
import { Transaction } from "../generated/client"
import { Prisma} from "../generated/client";

export interface ITransactionRepository{
    getTransactionById(transactionId: string,userId: string, include: Prisma.TransactionInclude | null): Promise<RepoResult<Transaction>>
    getMyTransactions(userId: string,include: Prisma.TransactionInclude|null, orderBy: Prisma.TransactionOrderByWithRelationInput): Promise<RepoResult<Transaction[]>>
    getTransactionsByLedgerId(userId: string,ledgerId: string, include: Prisma.TransactionInclude | null): Promise<RepoResult<Transaction[]>>
    createTransaction(userId: string, transactionData: TransactionCreateRequest): Promise<RepoResult<Transaction>>
    updateTransaction(userId: string, transactionId: string, transactionData: TransactionCreateRequest): Promise<RepoResult<Transaction>>
    
}