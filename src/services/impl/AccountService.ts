import prismaClient from "../../config/prismaClient";
import { BankAccounts, AccountTypes, AccountTypeSchema } from "../../domain/accountSchema";
import { ServiceResult } from "../../domain/interfaces";
import { IAccountService } from "../IAccountService";

export class AccountService implements IAccountService{
    getAllBankAccounts(userId: string): Promise<ServiceResult<BankAccounts>> {
        throw new Error("Method not implemented.");
    }
    async getAllAccountTypes(): Promise<ServiceResult<AccountTypes>> {
        try{
            const accountTypes = await prismaClient.accountType.findMany()
            if(!accountTypes || accountTypes.length == 0){
                return {
                    error: "No account types found",
                    statusCode: 400
                }
            }
            return {
                data: accountTypes.map((accountType)=>
                    AccountTypeSchema.parse(accountType)
                ),
                statusCode:200
            }
        }catch(error:any){
            return {
                error:error,
                statusCode: 400
            }
        }
    }
    
}