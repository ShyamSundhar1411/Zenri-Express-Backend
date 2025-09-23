import { signUpRequest, signUpSchema } from "../domain/authSchema";
import { ServiceResult } from "../domain/interfaces";
import { UserWithToken } from "../domain/userSchema";

export interface IAuthService{
    signUp(requestData: signUpRequest): Promise<ServiceResult<UserWithToken>>

}