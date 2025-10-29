import {z} from "zod";
import { Prisma } from "../generated";

export const PaymentCycle = z.enum([
    "WEEKLY","MONTHLY","YEARLY"
])
export const SubscriptionStatus = z.enum([
    "SUBSCRIBED","UNSUBSCRIBED","BILL_OVERDUE"
])
export const SubscriptionSchema = z.object({
    id: z.string(),
    subscriptionName: z.string(),
    amount: z.instanceof(Prisma.Decimal),
    currencyCode: z.string(),
    subscribedOn: z.coerce.date(),
    expiresOn: z.coerce.date(),
    lastBilledAt: z.coerce.date(),
    nextBillingDate: z.coerce.date(),
    paymentCycle: PaymentCycle,
    susbcriptionStatus: SubscriptionStatus,
    userId: z.string(),
    isDeleted: z.boolean(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type Subscription = z.infer<typeof SubscriptionSchema>
export type Subscriptions = z.infer<typeof SubscriptionSchema[]>