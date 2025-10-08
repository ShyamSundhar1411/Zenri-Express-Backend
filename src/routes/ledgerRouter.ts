import { Router } from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import { getMyLedgers } from "../controllers/ledgerController";


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
ledgerRouter.get('/my-ledgers', authMiddlware.authRequired,getMyLedgers)

export default ledgerRouter;