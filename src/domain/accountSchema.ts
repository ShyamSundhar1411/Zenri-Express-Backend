import {z} from "zod";
import { UserSchema } from "./userSchema";
import { BankAccount } from "../generated";

export const AccountTypeSchema = z.object({
    id: z.string(),
    accountTypeName: z.string(),
    isDisabled: z.boolean(),
    createdAt: z.iso.datetime(),
    updatedAt: z.iso.datetime(),
})

export const CardNetworkSchema = z.object({
    id: z.string(),
    networkName: z.string(),
    isDisabled: z.boolean(),
    createdAt: z.iso.datetime(),
    updatedAt: z.iso.datetime(),
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
    user: UserSchema,
    status: AccountStatus.default("ACTIVE"),
    createdAt: z.iso.datetime(),
    updatedAt: z.iso.datetime(),
})


export type BankAccounts = z.infer<BankAccount []>