import prismaClient from "../../config/prismaClient";
import { RepoResult } from "../../domain/interfaces";
import { Transaction } from "../../generated/client"
import { Prisma } from "../../generated";
import { ITransactionRepository } from "../ITransactionRepository";

export class TransactionRepository implements ITransactionRepository{
    private db = prismaClient;
   async  getTransactionById(transactionId: string,userId: string,include: Prisma.TransactionInclude | null): Promise<RepoResult<Transaction>> {
        try{
            const transaction = await this.db.transaction.findFirst({
                where:{
                    id: transactionId,
                    userId: userId
                },
                include: include 
            })
            if(!transaction){
                return {
                    errorType: "NOT_FOUND",
                    error: "Transaction not found"
                }
            }
            return {
                data: transaction,
                
            }
        }catch(error:any){
            return {
                error: error.message || error,
                errorType: "DB_ERROR"
                
            }
        }
    }
    async getMyTransactions(userId: string, include: Prisma.TransactionInclude | null, orderBy: Prisma.TransactionOrderByWithRelationInput): Promise<RepoResult<Transaction[]>> {
        try{
            const transactions = await this.db.transaction.findMany({
                where:{
                    userId: userId
                },
                include: include,
                orderBy: orderBy
            })
            return {
                data: transactions
            }
        }catch(error:any){
            return {
                error: error.message || error,
                errorType: "DB_ERROR"

            }
        }
    }
    
}