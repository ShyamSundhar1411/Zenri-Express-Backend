import { Router } from "express";
import { signUp } from "../controllers/authController";


const authRouter: Router = Router()
/**
 * @swagger
 *   /api/v1/auth/signup:
 *   post:
 *     summary: User signup
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - userName
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *               userName:
 *                 type: string
 *                 example: "john_doe"
 *               password:
 *                 type: string
 *                 example: "P@ssw0rd"
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     email:
 *                       type: string
 *                     userName:
 *                       type: string
 *                     supabaseUserId:
 *                       type: string
 *                       nullable: true
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *                 tokens:
 *                   type: object
 *                   properties:
 *                     accessToken:
 *                       type: string
 *                     refreshToken:
 *                       type: string
 *       400:
 *         description: Bad request
 *       409:
 *         description: User already exists
 */
authRouter.post("/signup",signUp);
export default authRouter;