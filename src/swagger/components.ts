/**
 * @openapi
 * components:
 *   schemas:
 *     # =====================
 *     # User and Auth Schemas
 *     # =====================
 *     SignupRequest:
 *       type: object
 *       required:
 *         - email
 *         - userName
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: "user@example.com"
 *         userName:
 *           type: string
 *           example: "john_doe"
 *         password:
 *           type: string
 *           example: "P@ssw0rd"
 * 
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: "user@example.com"
 *         password:
 *           type: string
 *           example: "P@ssw0rd"
 * 
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         userName:
 *           type: string
 *         supabaseUserId:
 *           type: string
 *           nullable: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 * 
 *     Tokens:
 *       type: object
 *       properties:
 *         accessToken:
 *           type: string
 *         refreshToken:
 *           type: string
 * 
 *     SignupResponse:
 *       type: object
 *       properties:
 *         user:
 *           $ref: "#/components/schemas/User"
 *         tokens:
 *           $ref: "#/components/schemas/Tokens"
 * 
 *     LoginResponse:
 *       type: object
 *       properties:
 *         user:
 *           $ref: "#/components/schemas/User"
 *         tokens:
 *           $ref: "#/components/schemas/Tokens"
 * 
 *     # =====================
 *     # Account Type Schemas
 *     # =====================
 *     AccountType:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         accountTypeName:
 *           type: string
 *         isDisabled:
 *           type: boolean
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 * 
 *     GetAllAccountTypesResponse:
 *       type: object
 *       properties:
 *         data:
 *           type: array
 *           items:
 *             $ref: "#/components/schemas/AccountType"
 */

export {}; // Empty export to make this a module
