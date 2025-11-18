import { Router } from "express"
import { signup, login, getAccessTokenFromRefreshToken } from "../controllers/authController"

const authRouter: Router = Router()
/**
 * @swagger
 * /api/v1/auth/signup:
 *   post:
 *     summary: User signup
 *     tags:
 *         - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/SignupRequest"
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/SignupResponse"
 */
authRouter.post("/signup", signup)

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: User login
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/LoginRequest"
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/LoginResponse"
 *       400:
 *         description: Bad request
 *       401:
 *         description: Invalid credentials
 */
authRouter.post("/login", login)
/**
 * @swagger
 * /api/v1/auth/refresh-token:
 *   post:
 *     summary: Refresh access token using refresh token
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/RefreshTokenRequest"
 *     responses:
 *       200:
 *         description: Tokens refreshed successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Token"
 *       400:
 *         description: Bad request
 *       401:
 *         description: Invalid or expired refresh token
 *       500:
 *         description: Internal server error
 */

authRouter.post("/refresh-token", getAccessTokenFromRefreshToken)
export default authRouter
