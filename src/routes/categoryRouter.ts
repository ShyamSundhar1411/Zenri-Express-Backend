import { Router } from "express"
import { AuthMiddleware } from "../middlewares/authMiddleware"
import { createCategory, getAllCategories } from "../controllers/categoryController"

const categoryRouter: Router = Router()
const authMiddleware = new AuthMiddleware()
/**
 * @swagger
 * /api/v1/categories:
 *   get:
 *     summary: Get all categories of the authenticated user
 *     tags:
 *       - Category
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved user's categories
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/GetMyCategoriesResponse"
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
categoryRouter.get("/", authMiddleware.authRequired, getAllCategories)
/**
 * @openapi
 * /api/v1/categories:
 *   post:
 *     summary: Create a new category
 *     tags:
 *       - Category
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CategoryCreateRequest"
 *     responses:
 *       201:
 *         description: Successfully created category
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: "#/components/schemas/Category"
 *                 statusCode:
 *                   type: integer
 *                   example: 201
 *       400:
 *         description: Bad request - invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Category name already exists"
 *                 statusCode:
 *                   type: integer
 *                   example: 400
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
categoryRouter.post("/", authMiddleware.authRequired, createCategory)

export default categoryRouter
