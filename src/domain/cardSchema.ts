import { z } from "zod"
import { Prisma } from "../generated/client"

export const CardStatus = z.enum(["ACTIVE", "BLOCKED", "EXPIRED"])
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
  userId: z.string(),
  status: CardStatus.default("ACTIVE"),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
})

export const CardSchema = z.object({
  creditCards: z.array(CreditCardSchema),
  debitCards: z.array(DebitCardSchema)
})
export type CreditCard = z.infer<typeof CreditCardSchema>
export type CreditCards = z.infer<(typeof CreditCardSchema)[]>
export type DebitCard = z.infer<typeof DebitCardSchema>
export type DebitCards = z.infer<(typeof DebitCardSchema)[]>
export type Card = z.infer<typeof CardSchema>