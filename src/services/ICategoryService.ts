import { Categories, Category, CategoryCreateRequest } from "../domain/categorySchema"
import { ServiceResult } from "../domain/interfaces"

export interface ICategoryService {
  getAllCategories(userId: string): Promise<ServiceResult<Categories>>
  createCategory(userId: string, validatedData: CategoryCreateRequest): Promise<ServiceResult<Category>>
}
