import prismaClient from "../../config/prismaClient";
import { ServiceResult } from "../../domain/interfaces";
import { PaymentMethods, PaymentMethodCreateRequest, PaymentMethod, PaymentMethodSchema, PaymentMethodTypeSchema, PaymentMethodTypes } from "../../domain/paymentMethodSchema";
import { IPaymentMethodService } from "../IPaymentMethodService";

export class PaymentMethodService implements IPaymentMethodService{
    async getMyPaymentMethods(userId: string): Promise<ServiceResult<PaymentMethods>> {
        try{
            const paymentMethods = await prismaClient.paymentMethod.findMany({
                where:{
                    userId: userId
                }
            })
            return {
                data: paymentMethods.map((paymentMethod) => {
                    return PaymentMethodSchema.parse(paymentMethod)
                }),
                statusCode: 200
            }
        }catch(error:any){
            return {
                error:error,
                statusCode: 400
            }
        }
    }
    async createPaymentMethod(userId: string, paymentMethodData: PaymentMethodCreateRequest): Promise<ServiceResult<PaymentMethod>> {
        try{
            const now = new Date()
            const paymentMethod = await prismaClient.paymentMethod.create({
                data:{
                    creditCardId: paymentMethodData.creditCardId,
                    debitCardId: paymentMethodData.debitCardId,
                    bankAccountId: paymentMethodData.bankAccountId,
                    paymentMethodTypeId: paymentMethodData.paymentMethodTypeId,
                    notes: paymentMethodData.notes,
                    providerName: paymentMethodData.providerName,
                    externalHandle: paymentMethodData.externalHandle,
                    userId: userId,
                    createdAt: now,
                    updatedAt: now
                },
                include:{
                    paymentMethodType: true,
                    creditCard: true,
                    debitCard: true,
                    bankAccount: true
                }
            })
            return {
                data: PaymentMethodSchema.parse(paymentMethod),
                statusCode: 201
            }
        }catch(error:any){
            return {
                error:error,
                statusCode: 400
            }
        }
    }
    async getAllPaymentMethodTypes(): Promise<ServiceResult<PaymentMethodTypes>> {
        try{
            const paymentMethodTypes = await prismaClient.paymentMethodType.findMany()
            return {
                data: paymentMethodTypes.map((paymentMethodType) => {
                    return PaymentMethodTypeSchema.parse(paymentMethodType)
                }),
                statusCode: 200
            }
        }catch(error:any){
            return {
                error: error,
                statusCode: 400
            }
        }
    }
    
}