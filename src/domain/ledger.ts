import { z } from "zod"
import { Prisma } from "../generated/client"

export const TransactionMetadataSchema = z.object({
  transactions: z.number(),
  netBalance: z.number(),
  totalCredits: z.number(),
  totalDebits: z.number(),
  totalSavings: z.number(),
  totalSavingsPercentage: z.number(),
  totalCreditsPercentage: z.number(),
  totalDebitsPercentage: z.number(),
  currencyCode: z.string()
})
export const LedgerSchema = z.object({
  id: z.string(),
  month: z.string(),
  year: z.string(),
  userId: z.string(),
  transactionMetadata: TransactionMetadataSchema.optional(),
  isDeleted: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
})

export const LedgerCreateRequestSchema = z.object({
  month: z.enum([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]),
  year: z.string().regex(/^\d{4}$/, "Year must be a 4-digit string")
})
export const LedgersSchema = z.array(LedgerSchema)
export type Ledger = z.infer<typeof LedgerSchema>
export type LedgerCreateRequest = z.infer<typeof LedgerCreateRequestSchema>
export type Ledgers = z.infer<(typeof LedgersSchema)>
export type TransactionMetadata = z.infer<typeof TransactionMetadataSchema>


export type PrismaLedgerWithTransactions = Prisma.LedgerGetPayload<{
  include: { transactions: true };
}>;