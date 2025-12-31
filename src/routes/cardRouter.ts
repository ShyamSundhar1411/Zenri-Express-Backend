import { Router } from "express"
import { AuthMiddleware } from "../middlewares/authMiddleware"
import {
  createCreditCard,
  createDebitCard,
  getAllCardNetworks,
  getCreditCardById,
  getDebitCardById,
  getMyCards,
  getMyCreditCards,
  getMyDebitCards
} from "../controllers/cardController"
import { schemaValidator } from "../middlewares/schemaValidator"
import { CreateCreditCardSchema, CreateDebitCardSchema } from "../domain/card"

const cardRouter: Router = Router()
const authMiddleware = new AuthMiddleware()

/**
 * @swagger
 * /api/v1/cards/networks:
 *   get:
 *     summary: Get all card networks
 *     tags:
 *       - Cards
 *     responses:
 *       200:
 *         description: List of all card networks
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/CardNetwork"
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *       400:
 *         description: Bad request
 */
cardRouter.get("/networks", getAllCardNetworks)
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

/**
 * @swagger
 * /api/v1/cards/my-cards/debit:
 *   get:
 *     summary: Get all debit cards for authenticated user
 *     tags:
 *       - Cards
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of user's debit cards
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/DebitCard"
 *       401:
 *         description: Unauthorized
 */
cardRouter.get("/my-cards/debit", authMiddleware.authRequired, getMyDebitCards)
/**
 * @swagger
 * /api/v1/cards/my-cards/credit:
 *   get:
 *     summary: Get all credit cards for authenticated user
 *     tags:
 *       - Cards
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of user's credit cards
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/CreditCard"
 *       401:
 *         description: Unauthorized
 */
cardRouter.get(
  "/my-cards/credit",
  authMiddleware.authRequired,
  getMyCreditCards
)
/**
 * @swagger
 * /api/v1/cards/debit:
 *   post:
 *     summary: Create a new debit card for the authenticated user
 *     tags:
 *       - Cards
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CreateDebitCardRequest"
 *     responses:
 *       201:
 *         description: Debit card successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/DebitCard"
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
cardRouter.post("/debit", authMiddleware.authRequired, schemaValidator(CreateDebitCardSchema),createDebitCard)
/**
 * @swagger
 * /api/v1/cards/credit:
 *   post:
 *     summary: Create a new credit card for the authenticated user
 *     tags:
 *       - Cards
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CreateCreditCardRequest"
 *     responses:
 *       201:
 *         description: Credit card successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/CreditCard"
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
cardRouter.post("/credit", authMiddleware.authRequired, schemaValidator(CreateCreditCardSchema),createCreditCard)
/**
 * @swagger
 * /api/v1/cards/my-cards/debit/{id}:
 *   get:
 *     summary: Get debit card by ID for authenticated user
 *     tags:
 *       - Cards
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Debit card ID
 *     responses:
 *       200:
 *         description: Debit card details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/DebitCard"
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Debit card not found
 */
cardRouter.get(
  "/my-cards/debit/:id",
  authMiddleware.authRequired,
  getDebitCardById
)
/**
 * @swagger
 * /api/v1/cards/my-cards/credit/{id}:
 *   get:
 *     summary: Get credit card by ID for authenticated user
 *     tags:
 *       - Cards
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Credit card ID
 *     responses:
 *       200:
 *         description: Credit card details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/CreditCard"
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Credit card not found
 */
cardRouter.get(
  "/my-cards/credit/:id",
  authMiddleware.authRequired,
  getCreditCardById
)
export default cardRouter
