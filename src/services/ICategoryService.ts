import { Categories, Category, CategoryCreateRequest } from "../domain/category"
import { ServiceResult } from "../domain/interfaces"

export interface ICategoryService {
  getAllCategories(userId: string): Promise<ServiceResult<Categories>>
  createCategory(userId: string, validatedData: CategoryCreateRequest): Promise<ServiceResult<Category>>
}
