import { Category } from "../domain/category"
import { RepoResult } from "../domain/interfaces"
export interface ICategoryRepository{
    getCategoryById(categoryId: string, userId: string): Promise<RepoResult<Category>>
    getCategoryByName(categoryName: string, userId: string): Promise<RepoResult<Category>>
}