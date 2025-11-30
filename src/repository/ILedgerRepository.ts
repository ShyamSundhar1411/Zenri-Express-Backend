import { RepoResult } from "../domain/interfaces";
import { LedgerCreateRequest } from "../domain/ledger";
import { Ledger, Prisma } from "../generated/client";

export interface IledgerRepository{
    getMyLedgers(userId: string,include: Prisma.LedgerInclude): Promise<RepoResult<Ledger[]>>
    createLedger(userId: string, ledgerData: LedgerCreateRequest): Promise<RepoResult<Ledger>>
    getLedgerById(userId: string, ledgerId: string): Promise<RepoResult<Ledger>>
}