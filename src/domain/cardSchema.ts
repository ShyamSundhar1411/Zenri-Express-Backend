import { z } from "zod"
import { Prisma } from "../generated/client"

export const CardStatus = z.enum(["ACTIVE", "BLOCKED", "EXPIRED"])
export const CardNetworkSchema = z.object({
  id: z.string(),
  networkName: z.string(),
  isDisabled: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
})

export const CreditCardSchema = z.object({
  id: z.string(),
  cardNumber: z.string(),
  cardNetworkId: z.string(),
  issuer: z.instanceof(Prisma.Decimal),
  balance: z.instanceof(Prisma.Decimal),
  expiresAt: z.coerce.date(),
  userId: z.string(),
  status: CardStatus.default("ACTIVE"),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
})
export const DebitCardSchema = z.object({
  id: z.string(),
  cardNumber: z.string(),
  cardNetworkId: z.string(),
  bankAccountId: z.string(),
  expiresAt: z.coerce.date(),
  status: CardStatus.default("ACTIVE"),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
})

export const CardSchema = z.object({
  creditCards: z.array(CreditCardSchema),
  debitCards: z.array(DebitCardSchema)
})

export const CreateDebitCardSchema = z.object({
  cardNumber: z.string(),
  cardNetwork: z.string(),
  bankAccount: z.string(),
  expiresAt: z.coerce.date()
})

export const CreateCreditCardSchema = z.object({
  cardNumber: z.string(),
  cardNetwork: z.string(),
  issuer: z.string(),
  limit: z.number(),
  balance: z.number(),
  expiresAt: z.coerce.date()
})

export type CardNetwork = z.infer<typeof CardNetworkSchema>
export type CardNetworks = z.infer<(typeof CardNetworkSchema)[]>
export type CreditCard = z.infer<typeof CreditCardSchema>
export type CreditCards = z.infer<(typeof CreditCardSchema)[]>
export type CreateCreditCard = z.infer<typeof CreateCreditCardSchema>
export type DebitCard = z.infer<typeof DebitCardSchema>
export type DebitCards = z.infer<(typeof DebitCardSchema)[]>
export type CreateDebitCard = z.infer<typeof CreateDebitCardSchema>

export type Card = z.infer<typeof CardSchema>
