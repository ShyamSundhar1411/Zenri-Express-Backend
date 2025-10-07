import { ServiceResult } from "../domain/interfaces";
import { Ledgers } from "../domain/ledgerSchema";

export interface ILedgerService {
    getMyLedgers(userId: string): Promise<ServiceResult<Ledgers>>;
}