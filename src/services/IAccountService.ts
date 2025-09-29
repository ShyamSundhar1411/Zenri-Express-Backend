import {
  AccountTypes,
  BankAccount,
  BankAccounts,
  CreateBankAccountRequest
} from "../domain/accountSchema"
import { ServiceResult } from "../domain/interfaces"

export interface IAccountService {
  getAllAccountTypes(): Promise<ServiceResult<AccountTypes>>
  createBankAccount(
    userId: string,
    data: CreateBankAccountRequest
  ): Promise<ServiceResult<BankAccount>>
  getMyBankAccounts(userId: string): Promise<ServiceResult<BankAccounts>>
  getBankAccountById(
    id: string,
    userId: string
  ): Promise<ServiceResult<BankAccount>>
}
