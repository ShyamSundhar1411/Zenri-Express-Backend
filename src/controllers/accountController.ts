import { RequestHandler, Response, Request} from "express";
import { AccountService } from "../services/impl/AccountService";
import { asyncHandler } from "../utils/asyncHandler";

const accountService = new AccountService()


export const getAllAccountTypes: RequestHandler = asyncHandler(
    async (req:Request, res: Response) => {
        const result = await accountService.getAllAccountTypes()
        return res.status(result.statusCode).json(result)
    }
)