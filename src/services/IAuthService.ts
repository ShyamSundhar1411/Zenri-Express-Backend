import { logInRequest, signUpRequest, signUpSchema } from "../domain/authSchema";
import { ServiceResult } from "../domain/interfaces";
import { UserWithToken } from "../domain/userSchema";

export interface IAuthService{
    signup(requestData: signUpRequest): Promise<ServiceResult<UserWithToken>>
    login(requestData: logInRequest): Promise<ServiceResult<UserWithToken>>

}