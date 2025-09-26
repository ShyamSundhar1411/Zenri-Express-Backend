import { Router } from "express";
import { getAllAccountTypes } from "../controllers/accountController";

const accountRouter: Router = Router();
/**
 * @swagger
 * /api/v1/accounts/account-types:
 *   get:
 *     summary: Get all account types
 *     tags:
 *       - Accounts
 *     responses:
 *       200:
 *         description: List of all account types
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/GetAllAccountTypesResponse"
 *       400:
 *         description: Bad request
 */
accountRouter.get("/account-types",getAllAccountTypes)

export default accountRouter;