import { Categories } from "../domain/categorySchema"
import { ServiceResult } from "../domain/interfaces"

export interface ICategoryService {
  getAllCategories(userId: string): Promise<ServiceResult<Categories>>
}
