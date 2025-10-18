import { z } from "zod"
import { Prisma } from "../generated/client"

export const TransactionType = z.enum(["CREDIT", "DEBIT"])
export const TransactionSchema = z.object({
  id: z.string(),
  amount: z.instanceof(Prisma.Decimal),
  currencyCode: z.string(),
  TransactionType: TransactionType.default("DEBIT"),
  categoryId: z.string(),
  ledgerId: z.string(),
  userId: z.string(),
  paymentMethodId: z.string().nullable(),
  description: z.string().nullable(),
  isDeleted: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
})

export const TransactionCreateRequestSchema = z.object({
  amount: z.instanceof(Prisma.Decimal),
  currencyCode: z.string(),
  transactionType: TransactionType.default("DEBIT"),
  paymentMethodId: z.string(),
  categoryId: z.string(),
  description: z.string().nullable(),
  transactedOn: z.coerce.date().default(new Date())
})
export type Transaction = z.infer<typeof TransactionSchema>
export type Transactions = z.infer<(typeof TransactionSchema)[]>
export type TransactionCreateRequest = z.infer<
  typeof TransactionCreateRequestSchema
>
