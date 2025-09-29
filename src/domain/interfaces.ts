import { Request } from "express"
export interface ServiceResult<T> {
  data?: T
  error?: string
  statusCode: number
}

export interface AuthRequest extends Request {
  userId?: string
}
