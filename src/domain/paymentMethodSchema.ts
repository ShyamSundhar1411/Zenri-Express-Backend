import { z } from "zod"

export const PaymentMethodTypeSchema = z.object({
  id: z.string(),
  paymentMethodTypeName: z.string(),
  isDisabled: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
})

export const PaymentMethodTypesSchema = z.array(PaymentMethodTypeSchema)
export const PaymentMethodSchema = z.object({
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

export const PaymentMethodCreateRequestSchema = z.object({
  paymentMethodTypeId: z.string(),
  creditCardId: z.string().nullable().default(null),
  debitCardId: z.string().nullable().default(null),
  bankAccountId: z.string().nullable().default(null),
  notes: z.string().nullable().default(null),
  providerName: z.string().nullable().default(null),
  externalHandle: z.string().nullable().default(null),
  isDefault: z.boolean().default(false),
})

export type PaymentMethodType = z.infer<typeof PaymentMethodTypeSchema>
export type PaymentMethodTypes = z.infer<typeof PaymentMethodTypesSchema>
export type PaymentMethod = z.infer<typeof PaymentMethodSchema>
export type PaymentMethods = z.infer<(typeof PaymentMethodSchema)[]>
export type PaymentMethodCreateRequest = z.infer<typeof PaymentMethodCreateRequestSchema>
