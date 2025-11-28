import { RepoResult } from "../domain/interfaces";
import { Transaction } from "../generated/client"
import { Prisma} from "../generated/client";

export interface ITransactionRepository{
    getTransactionById(transactionId: string,userId: string, include: Prisma.TransactionInclude | null): Promise<RepoResult<Transaction>>
    getMyTransactions(userId: string,include: Prisma.TransactionInclude|null, orderBy: Prisma.TransactionOrderByWithRelationInput): Promise<RepoResult<Transaction[]>>
}