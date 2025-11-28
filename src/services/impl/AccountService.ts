import prismaClient from "../../config/prismaClient"
import {
  BankAccounts,
  AccountTypes,
  AccountTypeSchema,
  BankAccountSchema,
  BankAccount,
  CreateBankAccountRequest
} from "../../domain/account"
import { ServiceResult } from "../../domain/interfaces"
import { IAccountService } from "../IAccountService"

export class AccountService implements IAccountService {
  async getAllAccountTypes(): Promise<ServiceResult<AccountTypes>> {
    try {
      const accountTypes = await prismaClient.accountType.findMany()
      if (!accountTypes || accountTypes.length == 0) {
        return {
          error: "No account types found",
          statusCode: 400
        }
      }
      return {
        data: accountTypes.map((accountType) =>
          AccountTypeSchema.parse(accountType)
        ),
        statusCode: 200
      }
    } catch (error: any) {
      return {
        error: error,
        statusCode: 400
      }
    }
  }
  async createBankAccount(
    userId: string,
    data: CreateBankAccountRequest
  ): Promise<ServiceResult<BankAccount>> {
    try {
      const accountType = await prismaClient.accountType.findFirst({
        where: {
          accountTypeName: data.accountType
        }
      })
      if (!accountType) {
        return {
          error: "Account type not found",
          statusCode: 400
        }
      }
      const bankAccount = await prismaClient.bankAccount.create({
        data: {
          accountNumber: data.accountNumber,
          accountTypeId: accountType.id,
          bankName: data.bankName,
          balance: data.balance,
          userId: userId
        },
        include: {
          accountType: true
        }
      })
      return {
        data: BankAccountSchema.parse(bankAccount),
        statusCode: 201
      }
    } catch (error: any) {
      if (error.code === "P2002") {
        return {
          error: "Account number already exists",
          statusCode: 400
        }
      }
      return {
        error: error.message || "Internal error",
        statusCode: 500
      }
    }
  }
  async getMyBankAccounts(
    userId: string
  ): Promise<ServiceResult<BankAccounts>> {
    try {
      const bankAccounts = await prismaClient.bankAccount.findMany({
        where: {
          userId: userId
        },
        include: {
          accountType: true
        }
      })
      if (!bankAccounts || bankAccounts.length == 0) {
        return {
          error: "No bank accounts found",
          statusCode: 400
        }
      }
      return {
        data: bankAccounts.map((bankAccount) => {
          return BankAccountSchema.parse(bankAccount)
        }),
        statusCode: 200
      }
    } catch (error: any) {
      return {
        error: error,
        statusCode: 400
      }
    }
  }
  async getBankAccountById(
    id: string,
    userId: string
  ): Promise<ServiceResult<BankAccount>> {
    try {
      const bankAccount = await prismaClient.bankAccount.findFirst({
        where: {
          id: id,
          userId: userId
        },
        include: {
          accountType: true
        }
      })
      if (!bankAccount) {
        return {
          error: "Bank account not found",
          statusCode: 404
        }
      }
      return {
        data: BankAccountSchema.parse(bankAccount),
        statusCode: 200
      }
    } catch (error: any) {
      return {
        error: error,
        statusCode: 400
      }
    }
  }
}
