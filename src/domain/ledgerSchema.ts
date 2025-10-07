import { z } from "zod";

export const LedgerSchema = z.object({
    id: z.string(),
    month: z.string(),
    year: z.string(),
    userId: z.string(),
    isDeleted: z.boolean(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type Ledger = z.infer<typeof LedgerSchema>
export type Ledgers = z.infer<typeof LedgerSchema[]>