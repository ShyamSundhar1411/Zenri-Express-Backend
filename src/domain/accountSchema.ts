import {z} from "zod";
import { UserSchema } from "./userSchema";


export const AccountTypeSchema = z.object({
    id: z.string(),
    accountTypeName: z.string(),
    isDisabled: z.boolean(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
})

export const CardNetworkSchema = z.object({
    id: z.string(),
    networkName: z.string(),
    isDisabled: z.boolean(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
})

export const AccountStatus = z.enum([
  "ACTIVE",
  "CLOSED",
  "FROZEN",
  "SUSPENDED",
]);
export const  BankAccountSchema = z.object({
    id: z.string(),
    accountNumber: z.string(),
    accountTyp: AccountTypeSchema,
    bankName: z.string(),
    balance: z.number(),
    userId: z.string(),
    status: AccountStatus.default("ACTIVE"),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
})
export const CardStatus = z.enum([
    "ACTIVE",
    'BLOCKED',
    "EXPIRED"
])
export const CreditCardSchema = z.object({
    id: z.string(),
    cardNumber: z.string(),
    cardNetworkId: z.string(),
    issuer: z.string(),
    balance: z.string(),
    expiresAt: z.coerce.date(),
    userId: z.string(),
    status: CardStatus.default("ACTIVE"),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
})
export const DebitCardSchema = z.object({
    id: z.string(),
    cardNumber: z.string(),
    cardNetworkId: z.string(),
    bankAccountId: z.string(),
    expiresAt: z.coerce.date(),
    userId: z.string(),
    status: CardStatus.default("ACTIVE"),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
})
export type AccountType = z.infer<typeof AccountTypeSchema>
export type AccountTypes = z.infer<typeof AccountTypeSchema []>
export type BankAccount = z.infer<typeof BankAccountSchema>
export type BankAccounts = z.infer<typeof BankAccountSchema []>
export type CreditCard  = z.infer<typeof CreditCardSchema>
export type CreditCards = z.infer<typeof CreditCardSchema []>
export type DebitCard = z.infer<typeof DebitCardSchema>
export type DebitCards = z.infer<typeof DebitCardSchema []>