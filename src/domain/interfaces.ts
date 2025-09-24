export interface ServiceResult<T> {
  data?: T;
  error?: string;
  statusCode: number;
}