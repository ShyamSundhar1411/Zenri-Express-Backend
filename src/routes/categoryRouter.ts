import { Router } from "express"
import { AuthMiddleware } from "../middlewares/authMiddleware"
import { getAllCategories } from "../controllers/categoryController"

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
export default categoryRouter
