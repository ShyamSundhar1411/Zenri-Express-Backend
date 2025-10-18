import { Router } from "express"
import { AuthMiddleware } from "../middlewares/authMiddleware"
import { createLedger, getMyLedgers } from "../controllers/ledgerController"

const ledgerRouter: Router = Router()
const authMiddlware = new AuthMiddleware()
/**
 * @swagger
 * /api/v1/ledger/my-ledgers:
 *   get:
 *     summary: Get all ledgers of the authenticated user
 *     tags:
 *       - Ledger
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved user's ledgers
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/GetMyLedgersResponse"
 *       401:
 *         description: Unauthorized - Invalid or missing token
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
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 *                 statusCode:
 *                   type: integer
 *                   example: 500
 */
ledgerRouter.get("/my-ledgers", authMiddlware.authRequired, getMyLedgers)
/**
 * @openapi
 * /api/v1/ledger/:
 *   post:
 *     summary: Create a new ledger entry
 *     description: |
 *       Creates a ledger for the given user for a specific month and year.
 *       If a ledger already exists for the provided month and year, the API returns a 400 error.
 *       If `month` and `year` are omitted, the system automatically uses the current month and year.
 *     tags:
 *       - Ledger
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CreateLedgerRequest"
 *     responses:
 *       200:
 *         description: Successfully created a new ledger
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/CreateLedgerResponse"
 *       400:
 *         description: Bad request — Ledger already exists or invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Ledger already exists for this month"
 *                 statusCode:
 *                   type: integer
 *                   example: 400
 *       401:
 *         description: Unauthorized — Invalid or missing token
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
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Unexpected error occurred while creating ledger"
 *                 statusCode:
 *                   type: integer
 *                   example: 500
 *
 *
 */
ledgerRouter.post("/", authMiddlware.authRequired, createLedger)
export default ledgerRouter
