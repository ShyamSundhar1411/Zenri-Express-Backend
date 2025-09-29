import { LoginRequest, SignUpRequest } from "../domain/authSchema"
import { ServiceResult } from "../domain/interfaces"
import { UserWithToken } from "../domain/userSchema"

export interface IAuthService {
  signup(requestData: SignUpRequest): Promise<ServiceResult<UserWithToken>>
  login(requestData: LoginRequest): Promise<ServiceResult<UserWithToken>>
}
