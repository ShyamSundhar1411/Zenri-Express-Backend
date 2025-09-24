import {z} from "zod";


export const signUpSchema = z.object({
    email: z.email({message:"Invalid Email"}),
    userName: z.string().min(3, {"message":"Username must have minimum length of 3 characters"}),
    password: z.string()
    .min(6,{"message":"Password must have minimum length of 6 characters"})
    .regex(/[A-Z]/,{"message":"Password must contain an uppercase character"})
    .regex(/[a-z]/, {"message":"Password must contain a lowercase character"})
    .regex(/[0-9]/, {"message":"Password must contain a number"})
    .regex(/[^A-Za-z0-9]/, {"message":"Password must contain a special character"})
})

export const loginSchema = z.object({
    email: z.email({message:"Invalid Email"}),
    password: z.string(),
})

export type signUpRequest = z.infer<typeof signUpSchema>
export type logInRequest = z.infer<typeof loginSchema>