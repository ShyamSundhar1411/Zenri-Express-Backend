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
 *     Tokens:
 *       type: object
 *       properties:
 *         accessToken:
 *           type: string
 *         refreshToken:
 *           type: string
 *     SignupResponse:
 *       type: object
 *       properties:
 *         user:
 *           $ref: "#/components/schemas/User"
 *         tokens:
 *           $ref: "#/components/schemas/Tokens"
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
 *     GetAllAccountTypesResponse:
 *       type: object
 *       properties:
 *         data:
 *           type: array
 *           items:
 *             $ref: "#/components/schemas/AccountType"
 *
 *     # =====================
 *     # Bank Account Schemas
 *     # =====================
 *     BankAccount:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "acc_12345"
 *         accountNumber:
 *           type: string
 *           example: "123456789012"
 *         accountType:
 *           $ref: "#/components/schemas/AccountType"
 *         bankName:
 *           type: string
 *           example: "Chase Bank"
 *         balance:
 *           type: number
 *           example: 2500.75
 *         userId:
 *           type: string
 *           example: "user_12345"
 *         status:
 *           type: string
 *           enum: [ACTIVE, INACTIVE, CLOSED]
 *           default: ACTIVE
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-09-29T12:34:56Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-09-29T12:34:56Z"
 *     GetMyBankAccountsResponse:
 *       type: object
 *       properties:
 *         data:
 *           type: array
 *           items:
 *             $ref: "#/components/schemas/BankAccount"
 *         error:
 *           type: string
 *           nullable: true
 *           example: null
 *         statusCode:
 *           type: integer
 *           example: 200
 *     CreateBankAccountRequest:
 *       type: object
 *       required:
 *         - accountNumber
 *         - accountType
 *         - bankName
 *         - balance
 *       properties:
 *         accountNumber:
 *           type: string
 *           example: "1234567890"
 *         accountType:
 *           type: string
 *           description: "Account type name (e.g., SAVINGS, CHECKING)"
 *           example: "SAVINGS"
 *         bankName:
 *           type: string
 *           example: "Chase Bank"
 *         balance:
 *           type: number
 *           example: 5000.75
 *     CreateBankAccountResponse:
 *       type: object
 *       properties:
 *         data:
 *           $ref: "#/components/schemas/BankAccount"
 *         error:
 *           type: string
 *           nullable: true
 *           example: null
 *         statusCode:
 *           type: integer
 *           example: 201
 *
 *     # =====================
 *     # Card Schemas
 *     # =====================
 *     CardStatus:
 *       type: string
 *       enum: [ACTIVE, BLOCKED, EXPIRED]
 *
 *     CreditCard:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "c1234567-89ab-cdef-0123-456789abcdef"
 *         cardNumber:
 *           type: string
 *           example: "4111111111111111"
 *         cardNetworkId:
 *           type: string
 *           example: "VISA"
 *         issuer:
 *           type: string
 *           description: "Decimal value from Prisma"
 *           example: "100.50"
 *         balance:
 *           type: number
 *           example: 5000.75
 *         expiresAt:
 *           type: string
 *           format: date-time
 *           example: "2026-12-31T23:59:59.000Z"
 *         userId:
 *           type: string
 *           example: "user_12345"
 *         status:
 *           $ref: "#/components/schemas/CardStatus"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-09-29T07:37:13.218Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-09-29T07:37:13.218Z"
 *
 *     DebitCard:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "d1234567-89ab-cdef-0123-456789abcdef"
 *         cardNumber:
 *           type: string
 *           example: "5123456789012345"
 *         cardNetworkId:
 *           type: string
 *           example: "MASTERCARD"
 *         bankAccountId:
 *           type: string
 *           example: "acc_12345"
 *         expiresAt:
 *           type: string
 *           format: date-time
 *           example: "2026-12-31T23:59:59.000Z"
 *         userId:
 *           type: string
 *           example: "user_12345"
 *         status:
 *           $ref: "#/components/schemas/CardStatus"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-09-29T07:37:13.218Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-09-29T07:37:13.218Z"
 *
 *     Card:
 *       type: object
 *       properties:
 *         creditCards:
 *           type: array
 *           items:
 *             $ref: "#/components/schemas/CreditCard"
 *         debitCards:
 *           type: array
 *           items:
 *             $ref: "#/components/schemas/DebitCard"
 *
 *     GetUserCardsResponse:
 *       type: object
 *       properties:
 *         data:
 *           $ref: "#/components/schemas/Card"
 *         statusCode:
 *           type: integer
 *           example: 200
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     # =====================
 *     # Card Creation Schemas
 *     # =====================
 *     CreateDebitCardRequest:
 *       type: object
 *       required:
 *         - cardNumber
 *         - cardNetwork
 *         - bankAccount
 *         - expiresAt
 *       properties:
 *         cardNumber:
 *           type: string
 *           example: "5123456789012345"
 *         cardNetwork:
 *           type: string
 *           example: "MASTERCARD"
 *         bankAccount:
 *           type: string
 *           description: "Bank account ID to link the debit card"
 *           example: "acc_12345"
 *         expiresAt:
 *           type: string
 *           format: date-time
 *           example: "2026-12-31T23:59:59.000Z"
 *
 *     CreateCreditCardRequest:
 *       type: object
 *       required:
 *         - cardNumber
 *         - cardNetwork
 *         - issuer
 *         - limit
 *         - balance
 *         - expiresAt
 *       properties:
 *         cardNumber:
 *           type: string
 *           example: "4111111111111111"
 *         cardNetwork:
 *           type: string
 *           example: "VISA"
 *         issuer:
 *           type: string
 *           description: "Issuer of the credit card"
 *           example: "Bank of America"
 *         limit:
 *           type: number
 *           example: 10000
 *         balance:
 *           type: number
 *           example: 5000.75
 *         expiresAt:
 *           type: string
 *           format: date-time
 *           example: "2026-12-31T23:59:59.000Z"
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     CardNetwork:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "net_123456"
 *         networkName:
 *           type: string
 *           example: "VISA"
 *         isDisabled:
 *           type: boolean
 *           example: false
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-09-29T12:34:56Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-09-29T12:34:56Z"
 */

export {}
