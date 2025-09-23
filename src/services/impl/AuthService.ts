import { signUpRequest } from "../../domain/authSchema";

import { supabase } from "../../config/supabase";
import { IAuthService } from "../IAuthService";

import prismaClient from "../../config/prismaClient";
import { userSchemaWithTokens, UserWithToken } from "../../domain/userSchema";
import { ServiceResult } from "../../domain/interfaces";


export class AuthService implements IAuthService {
    async signUp(requestData: signUpRequest): Promise<ServiceResult<UserWithToken>> {
        try {
            const { email, userName, password } = requestData;
            const existingUser = await prismaClient.user.findUnique({
                where: {
                    email: email
                }
            })
            if (existingUser) {
                return {
                    error: "User with this email already exists"
                }
            }
            const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
                email: email,
                password: password
            })
            if (signUpError) {
                return {
                    error: signUpError.message
                }
            }
            const user = await prismaClient.user.create({
                data: {
                    email: email,
                    userName: userName,
                    supabaseUserId: signUpData.user?.id ?? null,
                }
            }
            )
            const {data: signInData, error:signInError} = await supabase.auth.signInWithPassword(
                {
                    email:email,
                    password:password,
                }
            )
            if(signInError){
                return {
                    error:signInError.message
                }
            }
            return {
                data: userSchemaWithTokens.parse({
                    user: {
                        id: user.id,
                        email: user.email,
                        userName: user.userName,
                        supabaseUserId: user.supabaseUserId,
                        createdAt: user.createdAt.toISOString(),
                        updatedAt: user.updatedAt.toISOString(),
                    },
                    tokens: {
                        accessToken: signInData.session.access_token,
                        refreshToken: signInData.session.refresh_token,
                    }
                })
            }
        }
        catch (err: any) {
            return {
                error: err
            }
        }

    }

}