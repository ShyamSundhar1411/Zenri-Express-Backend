import prismaClient from "../../config/prismaClient";
import { ServiceResult } from "../../domain/interfaces";
import { Ledger, LedgerCreateRequest, Ledgers, LedgerSchema } from "../../domain/ledgerSchema";
import { ILedgerService } from "../ILedgerService";


export class LedgerService implements ILedgerService {
    async getLedgerById(userId: string, ledgerId: string): Promise<ServiceResult<Ledger>> {
        try{
            const ledger = await prismaClient.ledger.findUnique({
                where:{
                    userId:userId,
                    id: ledgerId
                }
            })
            return {
                data: LedgerSchema.parse(ledger),
                statusCode:200,
            }
        }catch(error:any){
            return {
                error: error.message||error,
                statusCode: 400
            }
        }
    }
    
    
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

    async createLedger(userId: string,ledgerData: LedgerCreateRequest): Promise<ServiceResult<Ledger>> {
        try{
            const now = new Date();
            const monthName =
            ledgerData.month ??
            now.toLocaleString("default", { month: "long" });
            const year = ledgerData.year ?? now.getFullYear().toString();
            
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