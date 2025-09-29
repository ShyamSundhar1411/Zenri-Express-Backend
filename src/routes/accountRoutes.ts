import { Router } from "express"
import {
  createBankAccount,
  getAllAccountTypes,
  getMyBankAccounts
} from "../controllers/accountController"
import { AuthMiddleware } from "../middlewares/authMiddleware"

const accountRouter: Router = Router()
const authMiddleware = new AuthMiddleware()
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
accountRouter.get("/account-types", getAllAccountTypes)
/**
 * @swagger
 * /api/v1/accounts/my-bank-accounts:
 *   get:
 *     summary: Get all bank accounts for the authenticated user
 *     tags:
 *       - Accounts
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all bank accounts for the user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/GetMyBankAccountsResponse"
 *       400:
 *         description: No bank accounts found or bad request
 *       401:
 *         description: Unauthorized - Invalid or missing token
 */
accountRouter.get(
  "/my-bank-accounts",
  authMiddleware.authRequired,
  getMyBankAccounts
)

/**
 * @swagger
 * /api/v1/accounts/create-bank-account:
 *   post:
 *     summary: Create a new bank account for the authenticated user
 *     tags:
 *       - Accounts
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CreateBankAccountRequest"
 *     responses:
 *       201:
 *         description: Bank account successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/CreateBankAccountResponse"
 *       400:
 *         description: Invalid input or account type not found
 *       401:
 *         description: Unauthorized - Invalid or missing token
 */

accountRouter.post(
  "/create-bank-account",
  authMiddleware.authRequired,
  createBankAccount
)
export default accountRouter
