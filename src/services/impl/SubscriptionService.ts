import prismaClient from "../../config/prismaClient";
import { ServiceResult } from "../../domain/interfaces";
import { Subscriptions, Subscription, SubscriptionSchema, SubscriptionCreateRequest } from "../../domain/subscription";
import { ISubscriptionService } from "../ISubscriptionService";

export class SubscriptionService implements ISubscriptionService{
    async createSubscription(userId: string, subscriptionData: SubscriptionCreateRequest): Promise<ServiceResult<Subscription>> {
        try{
            const subscription = await prismaClient.subscription.create({
              data:{
                subscriptionName: subscriptionData.subscriptionName,
                amount: subscriptionData.amount,
                currencyCode: subscriptionData.currencyCode,
                categoryId: subscriptionData.categoryId,
                expiresOn: subscriptionData.expiresOn,
                lastBilledAt: subscriptionData.lastBilledAt,
                nextBillingDate: subscriptionData.nextBillingDate,
                paymentCycle: subscriptionData.paymentCycle,
                status: subscriptionData.subscriptionStatus,
                userId: userId,
              },
              include:{
                category: true
              }
            })
            return{
                data: SubscriptionSchema.parse(subscription),
                statusCode: 201
            }
        }catch(error:any){
            return {
                error: error,
                statusCode: 400
            }
        }
    }
    async getMySubscriptions(userId: string): Promise<ServiceResult<Subscriptions>> {
        try{
            const subscriptions = await prismaClient.subscription.findMany({
                where:{
                   userId:userId
                },
                include:{
                    category: true
                }
            })
            return {
                data: subscriptions.map((subscription) => {
                    return SubscriptionSchema.parse(
                        subscription
                    )
                }),
                statusCode: 200
            }
        }catch(err:any){
            return {
                error: err,
                statusCode: 400
            }
        }
    }
    async getSubscriptionById(userId: string, subscriptionId: string): Promise<ServiceResult<Subscription>> {
        try{
            const subscription = await prismaClient.subscription.findUnique({
                where:{
                    id: subscriptionId,
                    userId: userId
                },
                include:{
                    category: true
                }
            })
            if(!subscription){
                return {
                    error:"Subscription Not Found",
                    statusCode: 404,
                }
            }
            return {
                data: SubscriptionSchema.parse(subscription),
                statusCode: 200
            }
        }catch(err:any){
            return {
                error: err,
                statusCode: 400
            }
        }
    }
    
}