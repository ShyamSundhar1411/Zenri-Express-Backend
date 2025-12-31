import { Router } from "express"
import {
  createBankAccount,
  getAllAccountTypes,
  getBankAccountById,
  getMyBankAccounts
} from "../controllers/accountController"
import { AuthMiddleware } from "../middlewares/authMiddleware"
import { schemaValidator } from "../middlewares/schemaValidator"
import { CreateBankAccountSchema } from "../domain/account"

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
 * /api/v1/accounts/bank-accounts:
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
  "/bank-accounts",
  authMiddleware.authRequired,
  getMyBankAccounts
)

/**
 * @swagger
 * /api/v1/accounts/bank-accounts:
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
  "/bank-accounts",
  authMiddleware.authRequired,
  schemaValidator(CreateBankAccountSchema),
  createBankAccount
)

/**
 * @swagger
 * /api/v1/accounts/bank-accounts/{id}:
 *   get:
 *     summary: Get a bank account by ID for the authenticated user
 *     tags:
 *       - Accounts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Bank account ID
 *     responses:
 *       200:
 *         description: Bank account object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/BankAccount"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       403:
 *         description: Forbidden - Bank account does not belong to the user
 *       404:
 *         description: Bank account not found
 *       500:
 *         description: Internal server error
 */
accountRouter.get(
  "/bank-accounts/:id",
  authMiddleware.authRequired,
  getBankAccountById
)
export default accountRouter
