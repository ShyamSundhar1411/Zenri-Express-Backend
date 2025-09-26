import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  email: z.email(),
  userName: z.string(),
  supabaseUserId: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const UserSchemaWithTokens = z.object({
    user: UserSchema,
    tokens: z.object({
        accessToken: z.string(),
        refreshToken: z.string(),
    })
})

export type UserWithToken = z.infer<typeof UserSchemaWithTokens>;