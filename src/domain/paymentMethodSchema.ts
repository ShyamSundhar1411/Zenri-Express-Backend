import {z} from "zod";


export const PaymentMethodTypeSchema = z.object({
    id: z.string(),
    paymentMethodTypeName: z.string(),
    isDisabled: z.boolean(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export const PaymentMethoSchema = z.object({
    id: z.string(),
    paymentMethodTypeId: z.string(),
    creditCardId: z.string().nullable(),
    debitCardId: z.string().nullable(),
    bankAccountId: z.string().nullable(),
    notes: z.string().nullable(),
    providerName: z.string().nullable(),
    externalHandle: z.string().nullable(),
    userId: z.string(),
    isDefault: z.boolean(),
    isDeleted: z.boolean(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type PaymentMethodType = z.infer<typeof PaymentMethodTypeSchema>
export type PaymentMethodTypes = z.infer<typeof PaymentMethodTypeSchema[]>
export type PaymentMethod = z.infer<typeof PaymentMethoSchema>
export type PaymentMethods = z.infer<typeof PaymentMethoSchema[]> 