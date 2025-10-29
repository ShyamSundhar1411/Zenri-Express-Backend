import { Router } from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import { getMySubscriptions, getSubscriptionById } from "../controllers/subscriptionController";

const subscriptionRouter:Router = Router()
const authMiddleware = new AuthMiddleware()

/**
 * @swagger
 * /api/v1/subscriptions:
 *   get:
 *     summary: Get all subscriptions for the authenticated user
 *     tags:
 *       - Subscriptions
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of subscriptions for the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Subscription"
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       400:
 *         description: Bad request
 */
subscriptionRouter.get("/", authMiddleware.authRequired, getMySubscriptions);

/**
 * @swagger
 * /api/v1/subscriptions/{subscriptionId}:
 *   get:
 *     summary: Get a subscription by its ID for the authenticated user
 *     tags:
 *       - Subscriptions
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: subscriptionId
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the subscription
 *     responses:
 *       200:
 *         description: Subscription details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Subscription"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       404:
 *         description: Subscription not found
 *       400:
 *         description: Bad request
 */
subscriptionRouter.get("/:subscriptionId", authMiddleware.authRequired, getSubscriptionById);
export default subscriptionRouter;