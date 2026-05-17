import prismaClient from "../../config/prismaClient";
import { Category } from "../../domain/category";
import { RepoError, RepoResult } from "../../domain/interfaces";
import { ICategoryRepository } from "../ICategoryRepository";

export class CategoryRepository implements ICategoryRepository{
    private db = prismaClient
    async getCategoryById(categoryId: string, userId: string): Promise<RepoResult<Category>> {
        try {
            const category = await this.db.category.findFirst({
                where: {
                    id: categoryId,
                    userId: userId
                }
            })
            if(!category) return {
                error: "Category not found",
                errorType: RepoError.NOT_FOUND
            }
            return {
                data: category
            }
        } catch (error:any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }
    async getCategoryByName(categoryName: string, userId: string): Promise<RepoResult<Category>> {
        try {
            const category = await this.db.category.findFirst({
                where: {
                    categoryName: categoryName,
                    userId: userId
                }
            })
            if(!category) return {
                error: "Category not found",
                errorType: RepoError.NOT_FOUND
            }
            return {
                data: category
            }
        } catch (error:any) {
            return {
                error: error.message || error,
                errorType: RepoError.DB_ERROR
            }
        }
    }
    
}