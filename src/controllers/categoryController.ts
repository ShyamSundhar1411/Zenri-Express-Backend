import { RequestHandler, Response } from "express"
import { CategoryService } from "../services/impl/CategoryService"
import { asyncHandler } from "../utils/asyncHandler"
import { AuthRequest } from "../domain/interfaces"
import { CategoryCreateRequestSchema } from "../domain/category"

const categoryService = new CategoryService()

export const getAllCategories: RequestHandler = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.userId!
    const result = await categoryService.getAllCategories(userId)
    return res.status(result.statusCode).json(result)
  }
)

export const createCategory: RequestHandler = asyncHandler(
  async (req:AuthRequest, res:Response) => {
    const userId = req.userId!

    const result  = await categoryService.createCategory(userId,req.body)
    return res.status(result.statusCode).json(result)
    
  }
)