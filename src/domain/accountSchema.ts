import { z } from "zod"
import { Prisma } from "../generated"

export const AccountTypeSchema = z.object({
  id: z.string(),
  accountTypeName: z.string(),
  isDisabled: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
})

export const AccountStatus = z.enum(["ACTIVE", "CLOSED", "FROZEN", "SUSPENDED"])
export const BankAccountSchema = z.object({
  id: z.string(),
  accountNumber: z.string(),
  accountType: AccountTypeSchema,
  bankName: z.string(),
  balance: z.instanceof(Prisma.Decimal),
  userId: z.string(),
  status: AccountStatus.default("ACTIVE"),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
})

export const CreateBankAccountSchema = z.object({
  accountNumber: z
    .string()
    .min(6, "Account number must be at least 6 digits")
    .max(20, "Account number cannot exceed 20 digits"),
  accountType: z.string().min(1, "Account type is required"),
  bankName: z.string(),
  balance: z.number()
})

export type AccountType = z.infer<typeof AccountTypeSchema>
export type AccountTypes = z.infer<(typeof AccountTypeSchema)[]>
export type BankAccount = z.infer<typeof BankAccountSchema>
export type BankAccounts = z.infer<(typeof BankAccountSchema)[]>
export type CreateBankAccountRequest = z.infer<typeof CreateBankAccountSchema>
