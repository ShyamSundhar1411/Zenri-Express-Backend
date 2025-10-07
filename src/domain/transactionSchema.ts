import { z} from "zod";
import { Prisma } from "../generated/client"

export const TransactionType = z.enum([
    "CREDIT",
    "DEBIT"
])
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
export type Transaction = z.infer<typeof TransactionSchema>
export type Transactions = z.infer<typeof TransactionSchema[]>