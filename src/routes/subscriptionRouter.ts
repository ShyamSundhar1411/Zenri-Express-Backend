import { Router } from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import { createSubscription, getMySubscriptions, getSubscriptionById } from "../controllers/subscriptionController";

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
/**
 * @swagger
 * /api/v1/subscriptions:
 *   post:
 *     summary: Create a new subscription for the authenticated user
 *     tags:
 *       - Subscriptions
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CreateSubscriptionRequest"
 *           example:
 *             subscriptionName: "Pro Plan"
 *             amount: 49.99
 *             currencyCode: "USD"
 *             subscribedOn: "2025-10-31T00:00:00Z"
 *             expiresOn: "2026-10-31T00:00:00Z"
 *             lastBilledAt: "2025-10-01T00:00:00Z"
 *             nextBillingDate: "2025-11-01T00:00:00Z"
 *             paymentCycle: "MONTHLY"
 *             subscriptionStatus: "SUBSCRIBED"
 *     responses:
 *       201:
 *         description: Subscription successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Subscription"
 *       400:
 *         description: Bad request - Validation failed or missing fields
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       409:
 *         description: Conflict - Subscription with the same name already exists
 */
subscriptionRouter.post("/", authMiddleware.authRequired, createSubscription);

export default subscriptionRouter;