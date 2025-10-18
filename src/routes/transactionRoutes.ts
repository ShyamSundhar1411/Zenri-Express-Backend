import { Router } from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import { createTransaction, getMyTransactions, getTransactionById } from "../controllers/transactionController";

const transactionRouter: Router = Router();
const authMiddleware = new AuthMiddleware();

/**
 * @swagger
 * components:
 *   schemas:
 *     Transaction:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "tx_abc123"
 *         amount:
 *           type: number
 *           example: 500.75
 *         currencyCode:
 *           type: string
 *           example: "USD"
 *         transactionType:
 *           type: string
 *           enum: ["CREDIT", "DEBIT"]
 *           example: "DEBIT"
 *         categoryId:
 *           type: string
 *           example: "cat_001"
 *         ledgerId:
 *           type: string
 *           example: "led_001"
 *         userId:
 *           type: string
 *           example: "usr_001"
 *         paymentMethodId:
 *           type: string
 *           example: "pm_001"
 *         description:
 *           type: string
 *           example: "Grocery purchase"
 *         transactedOn:
 *           type: string
 *           format: date-time
 *           example: "2025-10-18T10:30:00Z"
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     TransactionCreateRequest:
 *       type: object
 *       required:
 *         - amount
 *         - currencyCode
 *         - transactionType
 *         - categoryId
 *       properties:
 *         amount:
 *           type: number
 *           example: 200.5
 *         currencyCode:
 *           type: string
 *           example: "INR"
 *         transactionType:
 *           type: string
 *           enum: ["CREDIT", "DEBIT"]
 *           example: "CREDIT"
 *         paymentMethodId:
 *           type: string
 *           example: "pm_123"
 *         categoryId:
 *           type: string
 *           example: "cat_123"
 *         description:
 *           type: string
 *           example: "Freelance income"
 *         transactedOn:
 *           type: string
 *           format: date-time
 *           example: "2025-10-15T12:00:00Z"
 */

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
transactionRouter.get("/my-transactions", authMiddleware.authRequired, getMyTransactions);

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
transactionRouter.get("/my-transactions/:transactionId", authMiddleware.authRequired, getTransactionById);

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
transactionRouter.post("/", authMiddleware.authRequired, createTransaction);

export default transactionRouter;
