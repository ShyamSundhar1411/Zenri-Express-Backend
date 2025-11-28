import {z} from "zod";
import { Prisma } from "../generated";
import { CategorySchema } from "./category";

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
    category: CategorySchema.nullable(),
    currencyCode: z.string(),
    subscribedOn: z.coerce.date(),
    expiresOn: z.coerce.date(),
    lastBilledAt: z.coerce.date(),
    nextBillingDate: z.coerce.date(),
    paymentCycle: PaymentCycle,
    status: SubscriptionStatus,
    userId: z.string(),
    isDeleted: z.boolean(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export const SubscriptionCreateRequestSchema = z.object({
    subscriptionName: z.string(),
    amount: z.number(),
    currencyCode: z.string(),
    categoryId: z.string(),
    subscribedOn: z.coerce.date(),
    expiresOn: z.coerce.date(),
    lastBilledAt: z.coerce.date(),
    nextBillingDate: z.coerce.date(),
    paymentCycle: PaymentCycle,
    subscriptionStatus: SubscriptionStatus
})
export const SubscriptionsSchema = z.array(SubscriptionSchema)
export type Subscription = z.infer<typeof SubscriptionSchema>
export type Subscriptions = z.infer<typeof SubscriptionsSchema>
export type SubscriptionCreateRequest = z.infer<typeof SubscriptionCreateRequestSchema>