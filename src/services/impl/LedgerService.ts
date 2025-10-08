import prismaClient from "../../config/prismaClient";
import { ServiceResult } from "../../domain/interfaces";
import { Ledgers, LedgerSchema } from "../../domain/ledgerSchema";
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

}