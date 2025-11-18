import { z } from "zod"
import { TokenSchema } from "./authSchema"

export const UserSchema = z.object({
  id: z.string(),
  email: z.email(),
  userName: z.string(),
  supabaseUserId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
})

export const UserSchemaWithTokens = z.object({
  user: UserSchema,
  tokens: TokenSchema,
})

export type UserWithToken = z.infer<typeof UserSchemaWithTokens>
