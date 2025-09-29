import { Router } from "express"
import { signup, login } from "../controllers/authController"

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

export default authRouter
