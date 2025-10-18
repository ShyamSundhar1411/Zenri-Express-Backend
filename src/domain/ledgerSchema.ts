import { z } from "zod"

export const LedgerSchema = z.object({
  id: z.string(),
  month: z.string(),
  year: z.string(),
  userId: z.string(),
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

export type Ledger = z.infer<typeof LedgerSchema>
export type LedgerCreateRequest = z.infer<typeof LedgerCreateRequestSchema>
export type Ledgers = z.infer<(typeof LedgerSchema)[]>
