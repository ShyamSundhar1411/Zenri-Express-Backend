import { LoginRequest, RefreshTokenRequest, SignUpRequest, Token, TokenSchema } from "../../domain/auth"

import { supabase } from "../../config/supabase"
import { IAuthService } from "../IAuthService"

import prismaClient from "../../config/prismaClient"
import { UserSchemaWithTokens, UserWithToken } from "../../domain/user"
import { ServiceResult } from "../../domain/interfaces"
import { access } from "fs"

export class AuthService implements IAuthService {

  async login(
    requestData: LoginRequest
  ): Promise<ServiceResult<UserWithToken>> {
    try {
      const { email, password } = requestData
      const { data: supabaseUserData, error: supabaseError } =
        await supabase.auth.signInWithPassword({
          email: email,
          password: password
        })
      if (supabaseError) {
        return {
          statusCode: 401,
          error: supabaseError.message
        }
      }
      const user = await prismaClient.user.findFirst({
        where: {
          supabaseUserId: supabaseUserData.user.id
        }
      })
      if (!user) {
        return {
          error: "No account found with the provided credentials",
          statusCode: 401
        }
      }
      return {
        data: UserSchemaWithTokens.parse({
          user: {
            id: user.id,
            email: user.email,
            userName: user.userName,
            supabaseUserId: user.supabaseUserId,
            createdAt: user.createdAt.toISOString(),
            updatedAt: user.updatedAt.toISOString()
          },
          tokens: {
            accessToken: supabaseUserData.session.access_token,
            refreshToken: supabaseUserData.session.refresh_token
          }
        }),
        statusCode: 200
      }
    } catch (err: any) {
      return {
        error: err,
        statusCode: 400
      }
    }
  }
  async signup(
    requestData: SignUpRequest
  ): Promise<ServiceResult<UserWithToken>> {
    try {
      const { email, userName, password } = requestData
      const existingUser = await prismaClient.user.findUnique({
        where: {
          email: email
        }
      })
      if (existingUser) {
        return {
          statusCode: 400,
          error: "User with this email already exists"
        }
      }
      const { data: signUpData, error: signUpError } =
        await supabase.auth.signUp({
          email: email,
          password: password
        })
      if (signUpError) {
        return {
          statusCode: 400,
          error: signUpError.message
        }
      }
      const user = await prismaClient.user.create({
        data: {
          email: email,
          userName: userName,
          supabaseUserId: signUpData.user?.id ?? null
        }
      })
      const { data: signInData, error: signInError } =
        await supabase.auth.signInWithPassword({
          email: email,
          password: password
        })
      if (signInError) {
        return {
          statusCode: 401,
          error: signInError.message
        }
      }
      return {
        data: UserSchemaWithTokens.parse({
          user: {
            id: user.id,
            email: user.email,
            userName: user.userName,
            supabaseUserId: user.supabaseUserId,
            createdAt: user.createdAt.toISOString(),
            updatedAt: user.updatedAt.toISOString()
          },
          tokens: {
            accessToken: signInData.session.access_token,
            refreshToken: signInData.session.refresh_token
          }
        }),
        statusCode: 201
      }
    } catch (err: any) {
      return {
        statusCode: 400,
        error: err
      }
    }
  }
  async getAccessTokenFromRefreshToken(
    requestData: RefreshTokenRequest
  ): Promise<ServiceResult<Token>> {
    try {
      const { data, error } = await supabase.auth.refreshSession({
        refresh_token: requestData.refreshToken,
      });

      if (error || !data?.session) {
        return {
          error: error?.message ?? "Invalid refresh token",
          statusCode: 401,
        };
      }

      const session = data.session;

     
      const tokenData = TokenSchema.safeParse({
        accessToken: session.access_token,
        refreshToken: session.refresh_token,
      });

      if (!tokenData.success) {
        return {
          error: "Malformed token data from Supabase",
          statusCode: 500,
        };
      }

      return {
        data: tokenData.data,
        statusCode: 200,
      };

    } catch (err: any) {
      return {
        error: err?.message ?? "Unexpected error",
        statusCode: 500,
      };
    }
  }

}
