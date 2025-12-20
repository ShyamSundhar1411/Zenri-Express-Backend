import { Request } from "express"
export interface ServiceResult<T> {
  data?: T
  error?: string
  statusCode: number
}

export interface AuthRequest extends Request {
  userId?: string
}

export class RepositoryError extends Error {
  constructor(message: string){
    super(message);
    this.name = "RepositoryError";
  }
}
export type RepoErrorType = "NOT_FOUND" | "DB_ERROR" | "UNIQUE_CONSTRAINT_FAILED";
export enum RepoError {
  DB_ERROR = "DB_ERROR",
  NOT_FOUND = "NOT_FOUND",
  UNIQUE_CONSTRAINT_FAILED = "UNIQUE_CONSTRAINT_FAILED"
}
export interface RepoResult<T>{
  data?: T;
  error?: string;
  errorType?: RepoErrorType;
}