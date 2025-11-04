import { Router } from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import { createPaymentMethod, getAllPaymentMethodTypes, getMyPaymentMethods } from "../controllers/paymentMethodController";

const paymentMethodRouter: Router = Router();
const authMiddleware  = new AuthMiddleware()
/**
 * @openapi
 * /api/v1/payment-methods:
 *   get:
 *     summary: Get all payment methods of the authenticated user
 *     description: Retrieve all payment methods associated with the currently logged-in user.
 *     tags:
 *       - Payment Methods
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved payment methods
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PaymentMethod'
 *       401:
 *         description: Unauthorized - Missing or invalid authentication token
 *         content:
 *           application/json:
 */

paymentMethodRouter.get("/", authMiddleware.authRequired, getMyPaymentMethods)

/**
 * @openapi
 * /api/v1/payment-methods:
 *   post:
 *     summary: Create a new payment method
 *     description: Adds a new payment method for the authenticated user.
 *     tags:
 *       - Payment Methods
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PaymentMethodCreateRequest'
 *           examples:
 *             ExampleRequest:
 *               summary: Example payment method creation request
 *               value:
 *                 paymentMethodTypeId: "pmtype_001"
 *                 creditCardId: "cc_12345"
 *                 debitCardId: null
 *                 bankAccountId: null
 *                 notes: "Personal payment method for subscriptions"
 *                 providerName: "Stripe"
 *                 externalHandle: "stripe_67890"
 *                 isDefault: true
 *     responses:
 *       201:
 *         description: Payment method successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PaymentMethod'
 *       400:
 *         description: Bad Request - Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse400'
 *       401:
 *         description: Unauthorized - Missing or invalid authentication token
 *         content:
 *           application/json:
 */

paymentMethodRouter.post("/", authMiddleware.authRequired, createPaymentMethod)

/**
 * @openapi
 * /api/v1/payment-methods/types:
 *   get:
 *     summary: Retrieve all available payment method types
 *     description: Returns a list of all supported payment method types such as GPay, Debit Card, and NetBanking.
 *     tags:
 *       - Payment Methods
 *     responses:
 *       200:
 *         description: List of payment method types retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PaymentMethodTypes'
 */
paymentMethodRouter.get("/types",getAllPaymentMethodTypes)
export default paymentMethodRouter