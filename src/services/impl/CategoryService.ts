import prismaClient from "../../config/prismaClient"
import {
  Categories,
  CategorySchema,
  CategoryType
} from "../../domain/categorySchema"
import { ServiceResult } from "../../domain/interfaces"
import { ICategoryService } from "../ICategoryService"

export class CategoryService implements ICategoryService {
  async getAllCategories(userId: string): Promise<ServiceResult<Categories>> {
    try {
      const categories = await prismaClient.category.findMany({
        where: {
          OR: [
            {
              userId: userId
            },
            {
              categoryType: CategoryType.enum.SYSTEM
            }
          ]
        }
      })
      if (categories.length == 0) {
        return {
          error: "No categories found",
          statusCode: 200
        }
      }
      return {
        data: categories.map((category) => CategorySchema.parse(category)),
        statusCode: 200
      }
    } catch (error: any) {
      return {
        error: error,
        statusCode: 400
      }
    }
  }
}
