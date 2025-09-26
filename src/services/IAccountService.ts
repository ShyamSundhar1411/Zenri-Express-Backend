import { AccountTypes, BankAccounts } from "../domain/accountSchema";
import { ServiceResult } from "../domain/interfaces";


export interface IAccountService{
    getAllBankAccounts(userId: string): Promise<ServiceResult<BankAccounts>>
    getAllAccountTypes(): Promise<ServiceResult<AccountTypes>>
}