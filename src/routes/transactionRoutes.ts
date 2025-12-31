import { Router } from "express"
import { AuthMiddleware } from "../middlewares/authMiddleware"
import {
  createTransaction,
  getMyTransactions,
  getTransactionById
} from "../controllers/transactionController"
import { schemaValidator } from "../middlewares/schemaValidator"
import { TransactionCreateRequestSchema } from "../domain/transaction"

const transactionRouter: Router = Router()
const authMiddleware = new AuthMiddleware()

/**
 * @swagger
 * /api/v1/transactions/my-transactions:
 *   get:
 *     summary: Get all transactions for the authenticated user
 *     tags:
 *       - Transactions
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully fetched transactions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Transaction"
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Unauthorized"
 *                 statusCode:
 *                   type: integer
 *                   example: 401
 */
transactionRouter.get(
  "/my-transactions",
  authMiddleware.authRequired,
  getMyTransactions
)

/**
 * @swagger
 * /api/v1/transactions/my-transactions/{transactionId}:
 *   get:
 *     summary: Get a specific transaction by ID
 *     tags:
 *       - Transactions
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: transactionId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the transaction to retrieve
 *     responses:
 *       200:
 *         description: Successfully fetched transaction
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Transaction"
 *       404:
 *         description: Transaction not found
 *       401:
 *         description: Unauthorized
 */
transactionRouter.get(
  "/my-transactions/:transactionId",
  authMiddleware.authRequired,
  getTransactionById
)

/**
 * @swagger
 * /api/v1/transactions/:
 *   post:
 *     summary: Create a new transaction for the current month or the month of the provided `transactedOn`
 *     tags:
 *       - Transactions
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/TransactionCreateRequest"
 *     responses:
 *       201:
 *         description: Successfully created transaction
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Transaction"
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
transactionRouter.post("/", authMiddleware.authRequired, schemaValidator(TransactionCreateRequestSchema),createTransaction)
/**
 * @swagger
 * /api/v1/transactions/{ledgerId}:
 *   get:
 *     summary: Get all transactions for the given ledger ID
 *     tags:
 *       - Transactions
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: ledgerId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the ledger whose transactions should be retrieved
 *     responses:
 *       200:
 *         description: Successfully fetched transactions
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 transactions:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Transaction"
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Ledger not found
 *       500:
 *         description: Internal server error
 */
transactionRouter.get("/:ledgerId", authMiddleware.authRequired, getTransactionById)
export default transactionRouter
