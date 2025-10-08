import { RequestHandler, Response } from "express";
import { CategoryService } from "../services/impl/CategoryService";
import { asyncHandler } from "../utils/asyncHandler";
import { AuthRequest } from "../domain/interfaces";

const categoryService = new CategoryService();


export const getAllCategories: RequestHandler = asyncHandler(
    async (req: AuthRequest, res: Response) => {
        const userId = req.userId!;
        const result = await categoryService.getAllCategories(userId)
        return res.status(result.statusCode).json(result)
    }

)