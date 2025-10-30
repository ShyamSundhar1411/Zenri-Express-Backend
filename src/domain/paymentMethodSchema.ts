import { z } from "zod"

export const PaymentMethodTypeSchema = z.object({
  id: z.string(),
  paymentMethodTypeName: z.string(),
  isDisabled: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
})

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
  creditCardId: z.string().nullable(),
  debitCardId: z.string().nullable(),
  bankAccountId: z.string().nullable(),
  notes: z.string().nullable(),
  providerName: z.string().nullable(),
  externalHandle: z.string().nullable(),
  isDefault: z.boolean(),
})

export type PaymentMethodType = z.infer<typeof PaymentMethodTypeSchema>
export type PaymentMethodTypes = z.infer<(typeof PaymentMethodTypeSchema)[]>
export type PaymentMethod = z.infer<typeof PaymentMethodSchema>
export type PaymentMethods = z.infer<(typeof PaymentMethodSchema)[]>
export type PaymentMethodCreateRequest = z.infer<typeof PaymentMethodCreateRequestSchema>
