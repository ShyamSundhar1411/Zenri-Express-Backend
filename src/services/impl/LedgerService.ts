import prismaClient from "../../config/prismaClient";
import { ServiceResult } from "../../domain/interfaces";
import { Ledger, Ledgers, LedgerSchema } from "../../domain/ledgerSchema";
import { ILedgerService } from "../ILedgerService";


export class LedgerService implements ILedgerService {
    
    async getMyLedgers(userId: string): Promise<ServiceResult<Ledgers>> {
        try {
            const ledgers = await prismaClient.ledger.findMany(
                { where: { userId: userId } }
            )
            if (ledgers.length == 0) {
                return {
                    error: "No ledgers found",
                    statusCode: 200
                }
            }
            return {
                data: ledgers.map((ledger) => LedgerSchema.parse(ledger)),
                statusCode: 200,
            }
        } catch (error: any) {
            return {
                error: error,
                statusCode: 400,
            }
        }
    }

    async createLedger(userId: string): Promise<ServiceResult<Ledger>> {
        try{
            const now = new Date();
            const month = now.getMonth();
            const monthName= now.toLocaleString('default', { month: 'long' });
            const year = now.getFullYear().toString();
            const ledger = await prismaClient.ledger.findFirst({
               where:{
                    month: monthName,
                    year: year,
                    userId: userId
               }
            })
            if(ledger){
                return {
                    error: "Ledger already exists for this month",
                    statusCode: 400
                }
            }
            const newLedger: Ledger = await prismaClient.ledger.create({
                data:{
                    userId: userId,
                    month: monthName,
                    year: year,
                }
            })
            return {
                data: LedgerSchema.parse(newLedger),
                statusCode: 200
            }
        }catch(error:any){
            return {
                error:error,
                statusCode:400
            }
        }
    }
}