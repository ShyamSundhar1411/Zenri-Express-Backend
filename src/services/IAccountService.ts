import {
  AccountTypes,
  BankAccount,
  BankAccounts,
  CreateBankAccountRequest
} from "../domain/accountSchema"
import { ServiceResult } from "../domain/interfaces"

export interface IAccountService {
  getMyBankAccounts(userId: string): Promise<ServiceResult<BankAccounts>>
  getAllAccountTypes(): Promise<ServiceResult<AccountTypes>>
  createBankAccount(
    userId: string,
    data: CreateBankAccountRequest
  ): Promise<ServiceResult<BankAccount>>
}
