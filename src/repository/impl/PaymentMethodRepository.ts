import prismaClient from "../../config/prismaClient";
import { RepoError, RepoResult } from "../../domain/interfaces";
import { PaymentMethod } from "../../generated";
import { IPaymentMethodRepository } from "../IPaymentMethodRepository";

export class PaymentMethodRepository implements IPaymentMethodRepository {
    private db = prismaClient;
    async getPaymentMethodById(paymentMethodId: string, userId: string): Promise<RepoResult<PaymentMethod>> {
        try {
            const paymentMethod = await this.db.paymentMethod.findUnique({
                where: {
                    id: paymentMethodId,
                    userId: userId
                }
            })
            if (!paymentMethod) {
                return {
                    error: "Payment Method not found",
                    errorType: RepoError.NOT_FOUND
                }
            }
            return {
                data: paymentMethod
            }
        } catch (error: any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }
    async getPaymentMethodByQuery(query: string, userId: string): Promise<RepoResult<PaymentMethod>> {
        try {
            const paymentMethod = await this.db.paymentMethod.findFirst({
                where: {
                    userId: userId,
                    OR:[
                        {
                            bankAccount:{
                                accountNumber: query
                            }
                        },
                        {
                            debitCard:{
                                cardNumber: query
                            }
                        },
                        {
                            creditCard:{
                                cardNumber: query
                            }
                        }
                    ]
                }
            })
            if(!paymentMethod){
                return {
                    error: "Payment method not found",
                    errorType: RepoError.NOT_FOUND
                }
            }
            return {
                data: paymentMethod
            }
        } catch (error: any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }


}