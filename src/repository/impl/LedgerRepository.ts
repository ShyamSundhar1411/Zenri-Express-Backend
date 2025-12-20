import prismaClient from "../../config/prismaClient";
import { RepoError, RepoResult } from "../../domain/interfaces";
import { LedgerCreateRequest } from "../../domain/ledger";
import { Ledger, Prisma } from "../../generated";
import { IledgerRepository } from "../ILedgerRepository";

export class LedgerRepository implements IledgerRepository {
    private db = prismaClient
    async getMyLedgers(userId: string, include: Prisma.LedgerInclude | null): Promise<RepoResult<Ledger[]>> {
        try {
            const ledger = await this.db.ledger.findMany({
                where: {
                    userId: userId
                },
                include: include
            })
            return {
                data: ledger
            }
        } catch (error: any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }
    async createLedger(userId: string, ledgerData: LedgerCreateRequest): Promise<RepoResult<Ledger>> {
        try {
            const now = new Date()
            const monthName =
                ledgerData.month ?? now.toLocaleString("default", { month: "long" })
            const year = ledgerData.year ?? now.getFullYear().toString()

            const ledger = await prismaClient.ledger.findFirst({
                where: {
                    month: monthName,
                    year: year,
                    userId: userId
                }
            })
            if (ledger) {
                return {
                    error: "Ledger already exists for this month",
                    errorType: "UNIQUE_CONSTRAINT_FAILED"
                }
            }
            const newLedger = await prismaClient.ledger.create({
                data: {
                    month: monthName,
                    year: year,
                    userId: userId
                }
            })
            return {
                data: newLedger
            }
        } catch (error: any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }
    async getLedgerById(userId: string, ledgerId: string): Promise<RepoResult<Ledger>> {
        try {
            const ledger = await prismaClient.ledger.findFirst({
                where: {
                    id: ledgerId,
                    userId: userId
                }
            })
            if (!ledger) {
                return {
                    errorType: RepoError.NOT_FOUND,
                    error: "Ledger not found"
                }
            }
            return {
                data: ledger
            }
        } catch (error: any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }


}