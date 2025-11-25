import { z } from "zod"
import { Prisma } from "../generated/client"
import { CategorySchema } from "./categorySchema"
import { PaymentMethodSchema } from "./paymentMethodSchema"

export const TransactionType = z.enum(["CREDIT", "DEBIT"])
export const TransactionSchema = z.object({
  id: z.string(),
  amount: z.instanceof(Prisma.Decimal),
  currencyCode: z.string(),
  transactionType: TransactionType.default("DEBIT"),
  categoryId: z.string(),
  category: CategorySchema,
  ledgerId: z.string(),
  userId: z.string(),
  transactedOn: z.coerce.date(),
  paymentMethodId: z.string().nullable(),
  paymentMethod: PaymentMethodSchema,
  description: z.string().nullable(),
  isDeleted: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
})

export const TransactionCreateRequestSchema = z.object({
  amount: z.number(),
  currencyCode: z.string(),
  transactionType: TransactionType.default("DEBIT"),
  paymentMethodId: z.string(),
  categoryId: z.string(),
  subscriptionId: z.string().nullable().optional(),
  description: z.string().nullable(),
  transactedOn: z.coerce.date().default(new Date())
})
export type Transaction = z.infer<typeof TransactionSchema>
export type Transactions = z.infer<(typeof TransactionSchema)[]>
export type TransactionCreateRequest = z.infer<
  typeof TransactionCreateRequestSchema
>
