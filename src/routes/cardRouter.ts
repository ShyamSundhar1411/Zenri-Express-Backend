import { Router } from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import { getMyCards } from "../controllers/cardController";

const cardRouter: Router =  Router();
const authMiddleware = new AuthMiddleware()

/**
 * @swagger
 * /api/v1/cards/my-cards:
 *   get:
 *     summary: Get all credit and debit cards for the authenticated user
 *     tags:
 *       - Cards
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of credit and debit cards for the user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/GetUserCardsResponse"
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized - Invalid or missing token
 */
cardRouter.get("/my-cards", authMiddleware.authRequired, getMyCards)

export default cardRouter;