import { ServiceResult } from "../domain/interfaces";
import { Ledger, Ledgers } from "../domain/ledgerSchema";

export interface ILedgerService {
    getMyLedgers(userId: string): Promise<ServiceResult<Ledgers>>;
    createLedger(userId: string): Promise<ServiceResult<Ledger>>;
}