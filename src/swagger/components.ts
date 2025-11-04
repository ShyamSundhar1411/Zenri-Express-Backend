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

/**
 * @openapi
 * components:
 *   schemas:
 *     # =====================
 *     # Category Schemas
 *     # =====================
 *     CategoryType:
 *       type: string
 *       description: "Specifies whether the category is system-defined or user-defined."
 *       enum: [SYSTEM, CUSTOM]
 *       example: SYSTEM
 *
 *     Category:
 *       type: object
 *       title: Category
 *       description: "Represents a category entity."
 *       properties:
 *         id:
 *           type: string
 *           example: "cat_12345"
 *         categoryName:
 *           type: string
 *           example: "Groceries"
 *         categoryType:
 *           $ref: "#/components/schemas/CategoryType"
 *           description: "Type of category, defaults to SYSTEM."
 *         userId:
 *           type: string
 *           nullable: true
 *           example: "usr_67890"
 *           description: "User ID associated with the category (null if system category)."
 *         isDeleted:
 *           type: boolean
 *           example: false
 *           description: "Indicates whether the category is soft-deleted."
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-10-08T12:34:56Z"
 *           description: "Timestamp when the category was created."
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-10-08T12:34:56Z"
 *           description: "Timestamp when the category was last updated."
 *       required:
 *         - id
 *         - categoryName
 *         - categoryType
 *         - isDeleted
 *         - createdAt
 *         - updatedAt
 *
 *     Categories:
 *       type: array
 *       title: Categories
 *       description: "List of Category objects."
 *       items:
 *         $ref: "#/components/schemas/Category"
 *
 *     GetMyCategoriesResponse:
 *       type: object
 *       properties:
 *         data:
 *           $ref: "#/components/schemas/Categories"
 *         error:
 *           type: string
 *           nullable: true
 *           example: null
 *         statusCode:
 *           type: integer
 *           example: 200
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     # =====================
 *     # Ledger Schemas
 *     # =====================
 *     Ledger:
 *       type: object
 *       title: Ledger
 *       description: "Represents a user's financial ledger entry."
 *       properties:
 *         id:
 *           type: string
 *           example: "led_12345"
 *           description: "Unique identifier for the ledger."
 *         month:
 *           type: string
 *           example: "September"
 *           description: "The month this ledger entry represents."
 *         year:
 *           type: string
 *           example: "2025"
 *           description: "The year this ledger entry represents."
 *         userId:
 *           type: string
 *           example: "usr_67890"
 *           description: "ID of the user who owns this ledger."
 *         isDeleted:
 *           type: boolean
 *           example: false
 *           description: "Indicates whether this ledger entry has been soft-deleted."
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-10-08T12:34:56Z"
 *           description: "Timestamp when the ledger was created."
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-10-08T12:34:56Z"
 *           description: "Timestamp when the ledger was last updated."
 *       required:
 *         - id
 *         - month
 *         - year
 *         - userId
 *         - isDeleted
 *         - createdAt
 *         - updatedAt
 *
 *     Ledgers:
 *       type: array
 *       title: Ledgers
 *       description: "List of ledger entries."
 *       items:
 *         $ref: "#/components/schemas/Ledger"
 *
 *     GetMyLedgersResponse:
 *       type: object
 *       properties:
 *         data:
 *           $ref: "#/components/schemas/Ledgers"
 *         error:
 *           type: string
 *           nullable: true
 *           example: null
 *         statusCode:
 *           type: integer
 *           example: 200
 *     CreateLedgerResponse:
 *       type: object
 *       properties:
 *         data:
 *           $ref: "#/components/schemas/Ledger"
 *         error:
 *           type: string
 *           nullable: true
 *           example: null
 *         statusCode:
 *           type: integer
 *           example: 200
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     CreateLedgerRequest:
 *       type: object
 *       required:
 *         - month
 *         - year
 *       properties:
 *         month:
 *           type: string
 *           description: Full English month name (e.g., January, February, etc.)
 *           enum:
 *             - January
 *             - February
 *             - March
 *             - April
 *             - May
 *             - June
 *             - July
 *             - August
 *             - September
 *             - October
 *             - November
 *             - December
 *           example: "September"
 *         year:
 *           type: string
 *           description: Four-digit year
 *           pattern: "^[0-9]{4}$"
 *           example: "2025"
 *
 *     CreateLedgerResponse:
 *       type: object
 *       properties:
 *         data:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               example: "clm7zj0m4000twhl4o7wnfs7x"
 *             userId:
 *               type: string
 *               example: "clm7zj0m4000twhl4o7wnfs7x"
 *             month:
 *               type: string
 *               example: "September"
 *             year:
 *               type: string
 *               example: "2025"
 *             createdAt:
 *               type: string
 *               format: date-time
 *               example: "2025-09-01T12:00:00.000Z"
 *         statusCode:
 *           type: integer
 *           example: 200
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     # =====================
 *     # Transaction Schemas
 *     # =====================
 *     TransactionType:
 *       type: string
 *       enum: [CREDIT, DEBIT]
 *       example: DEBIT
 *
 *     Transaction:
 *       type: object
 *       title: Transaction
 *       description: "Represents a financial transaction entry."
 *       properties:
 *         id:
 *           type: string
 *           example: "txn_12345"
 *         amount:
 *           type: string
 *           example: "1500.75"
 *           description: "Decimal amount of the transaction."
 *         currencyCode:
 *           type: string
 *           example: "USD"
 *         transactionType:
 *           $ref: "#/components/schemas/TransactionType"
 *         categoryId:
 *           type: string
 *           example: "cat_98765"
 *         ledgerId:
 *           type: string
 *           example: "led_54321"
 *         userId:
 *           type: string
 *           example: "usr_67890"
 *         paymentMethodId:
 *           type: string
 *           nullable: true
 *           example: "pm_11111"
 *         description:
 *           type: string
 *           nullable: true
 *           example: "Salary Credit for October"
 *         transactedOn:
 *           type: string
 *           format: date-time
 *           example: "2025-10-01T12:00:00Z"
 *         isDeleted:
 *           type: boolean
 *           example: false
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-10-18T12:34:56Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-10-18T12:34:56Z"
 *       required:
 *         - id
 *         - amount
 *         - currencyCode
 *         - transactionType
 *         - categoryId
 *         - ledgerId
 *         - userId
 *         - isDeleted
 *         - createdAt
 *         - updatedAt
 *
 *     Transactions:
 *       type: array
 *       title: Transactions
 *       description: "List of transaction entries."
 *       items:
 *         $ref: "#/components/schemas/Transaction"
 *
 *     TransactionCreateRequest:
 *       type: object
 *       title: TransactionCreateRequest
 *       description: "Payload to create a new transaction."
 *       required:
 *         - amount
 *         - currencyCode
 *         - transactionType
 *         - categoryId
 *         - paymentMethodId
 *       properties:
 *         amount:
 *           type: number
 *           example: 1200.50
 *         currencyCode:
 *           type: string
 *           example: "USD"
 *         transactionType:
 *           $ref: "#/components/schemas/TransactionType"
 *         paymentMethodId:
 *           type: string
 *           example: "pm_11111"
 *         categoryId:
 *           type: string
 *           example: "cat_98765"
 *         description:
 *           type: string
 *           nullable: true
 *           example: "Freelance payment"
 *         transactedOn:
 *           type: string
 *           format: date-time
 *           example: "2025-07-15T10:00:00Z"
 *
 *     CreateTransactionResponse:
 *       type: object
 *       properties:
 *         data:
 *           $ref: "#/components/schemas/Transaction"
 *         error:
 *           type: string
 *           nullable: true
 *           example: null
 *         statusCode:
 *           type: integer
 *           example: 201
 *
 *     GetMyTransactionsResponse:
 *       type: object
 *       properties:
 *         data:
 *           $ref: "#/components/schemas/Transactions"
 *         error:
 *           type: string
 *           nullable: true
 *           example: null
 *         statusCode:
 *           type: integer
 *           example: 200
 *
 *     GetTransactionByIdResponse:
 *       type: object
 *       properties:
 *         data:
 *           $ref: "#/components/schemas/Transaction"
 *         error:
 *           type: string
 *           nullable: true
 *           example: null
 *         statusCode:
 *           type: integer
 *           example: 200
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     # =====================
 *     # Subscription Schemas
 *     # =====================
 *     PaymentCycle:
 *       type: string
 *       enum: [WEEKLY, MONTHLY, YEARLY]
 *       example: MONTHLY
 *
 *     SubscriptionStatus:
 *       type: string
 *       enum: [SUBSCRIBED, UNSUBSCRIBED, BILL_OVERDUE]
 *       example: SUBSCRIBED
 *
 *     Subscription:
 *       type: object
 *       title: Subscription
 *       description: "Represents a user's active or inactive subscription plan."
 *       properties:
 *         id:
 *           type: string
 *           example: "sub_12345"
 *         subscriptionName:
 *           type: string
 *           example: "Netflix Premium Plan"
 *         amount:
 *           type: string
 *           description: "Decimal amount representing subscription cost (Prisma.Decimal)"
 *           example: "999.99"
 *         currencyCode:
 *           type: string
 *           example: "USD"
 *         subscribedOn:
 *           type: string
 *           format: date-time
 *           example: "2025-09-01T12:00:00Z"
 *         expiresOn:
 *           type: string
 *           format: date-time
 *           example: "2026-09-01T12:00:00Z"
 *         lastBilledAt:
 *           type: string
 *           format: date-time
 *           example: "2025-10-01T12:00:00Z"
 *         nextBillingDate:
 *           type: string
 *           format: date-time
 *           example: "2025-11-01T12:00:00Z"
 *         paymentCycle:
 *           $ref: "#/components/schemas/PaymentCycle"
 *         subscriptionStatus:
 *           $ref: "#/components/schemas/SubscriptionStatus"
 *         userId:
 *           type: string
 *           example: "usr_67890"
 *         isDeleted:
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
 *       required:
 *         - id
 *         - subscriptionName
 *         - amount
 *         - currencyCode
 *         - subscribedOn
 *         - expiresOn
 *         - lastBilledAt
 *         - nextBillingDate
 *         - paymentCycle
 *         - subscriptionStatus
 *         - userId
 *         - isDeleted
 *         - createdAt
 *         - updatedAt
 *
 *     Subscriptions:
 *       type: array
 *       title: Subscriptions
 *       description: "List of Subscription objects."
 *       items:
 *         $ref: "#/components/schemas/Subscription"
 *
 *     GetMySubscriptionsResponse:
 *       type: object
 *       properties:
 *         data:
 *           $ref: "#/components/schemas/Subscriptions"
 *         error:
 *           type: string
 *           nullable: true
 *           example: null
 *         statusCode:
 *           type: integer
 *           example: 200
 *
 *     CreateSubscriptionRequest:
 *       type: object
 *       required:
 *         - subscriptionName
 *         - amount
 *         - currencyCode
 *         - paymentCycle
 *         - subscriptionStatus
 *         - subscribedOn
 *         - expiresOn
 *       properties:
 *         subscriptionName:
 *           type: string
 *           example: "Spotify Premium"
 *         amount:
 *           type: string
 *           description: "Decimal amount representing subscription cost."
 *           example: "199.00"
 *         currencyCode:
 *           type: string
 *           example: "INR"
 *         paymentCycle:
 *           $ref: "#/components/schemas/PaymentCycle"
 *         subscriptionStatus:
 *           $ref: "#/components/schemas/SubscriptionStatus"
 *         subscribedOn:
 *           type: string
 *           format: date-time
 *           example: "2025-07-15T00:00:00Z"
 *         expiresOn:
 *           type: string
 *           format: date-time
 *           example: "2026-07-15T00:00:00Z"
 *         lastBilledAt:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           example: "2025-09-01T00:00:00Z"
 *         nextBillingDate:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           example: "2025-10-01T00:00:00Z"
 *
 *     CreateSubscriptionResponse:
 *       type: object
 *       properties:
 *         data:
 *           $ref: "#/components/schemas/Subscription"
 *         error:
 *           type: string
 *           nullable: true
 *           example: null
 *         statusCode:
 *           type: integer
 *           example: 201
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     CreateSubscriptionRequest:
 *       type: object
 *       required:
 *         - subscriptionName
 *         - amount
 *         - currencyCode
 *         - subscribedOn
 *         - expiresOn
 *         - lastBilledAt
 *         - nextBillingDate
 *         - paymentCycle
 *         - subscriptionStatus
 *       properties:
 *         subscriptionName:
 *           type: string
 *           example: "Pro Plan"
 *         amount:
 *           type: number
 *           format: decimal
 *           example: 49.99
 *         currencyCode:
 *           type: string
 *           example: "USD"
 *         subscribedOn:
 *           type: string
 *           format: date-time
 *           example: "2025-10-31T00:00:00Z"
 *         expiresOn:
 *           type: string
 *           format: date-time
 *           example: "2026-10-31T00:00:00Z"
 *         lastBilledAt:
 *           type: string
 *           format: date-time
 *           example: "2025-10-01T00:00:00Z"
 *         nextBillingDate:
 *           type: string
 *           format: date-time
 *           example: "2025-11-01T00:00:00Z"
 *         paymentCycle:
 *           type: string
 *           enum: ["WEEKLY", "MONTHLY", "YEARLY"]
 *           example: "MONTHLY"
 *         subscriptionStatus:
 *           type: string
 *           enum: ["SUBSCRIBED", "UNSUBSCRIBED", "BILL_OVERDUE"]
 *           example: "SUBSCRIBED"
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     PaymentMethodType:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "pmtype_001"
 *         paymentMethodTypeName:
 *           type: string
 *           example: "Credit Card"
 *         isDisabled:
 *           type: boolean
 *           example: false
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-11-01T12:00:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-11-02T12:00:00Z"
 *
 *     PaymentMethod:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "pm_12345"
 *         paymentMethodTypeId:
 *           type: string
 *           example: "pmtype_001"
 *         creditCardId:
 *           type: string
 *           nullable: true
 *           example: "cc_001"
 *         debitCardId:
 *           type: string
 *           nullable: true
 *           example: null
 *         bankAccountId:
 *           type: string
 *           nullable: true
 *           example: null
 *         notes:
 *           type: string
 *           nullable: true
 *           example: "Personal payment method"
 *         providerName:
 *           type: string
 *           nullable: true
 *           example: "Stripe"
 *         externalHandle:
 *           type: string
 *           nullable: true
 *           example: "stripe_12345"
 *         userId:
 *           type: string
 *           example: "user_789"
 *         isDefault:
 *           type: boolean
 *           example: true
 *         isDeleted:
 *           type: boolean
 *           example: false
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-11-01T10:00:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-11-02T10:00:00Z"
 *
 *     PaymentMethodCreateRequest:
 *       type: object
 *       required:
 *         - paymentMethodTypeId
 *         - isDefault
 *       properties:
 *         paymentMethodTypeId:
 *           type: string
 *           example: "pmtype_001"
 *         creditCardId:
 *           type: string
 *           nullable: true
 *           example: "cc_123"
 *         debitCardId:
 *           type: string
 *           nullable: true
 *           example: null
 *         bankAccountId:
 *           type: string
 *           nullable: true
 *           example: null
 *         notes:
 *           type: string
 *           nullable: true
 *           example: "For recurring subscriptions"
 *         providerName:
 *           type: string
 *           nullable: true
 *           example: "Stripe"
 *         externalHandle:
 *           type: string
 *           nullable: true
 *           example: "stripe_67890"
 *         isDefault:
 *           type: boolean
 *           example: true
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     PaymentMethodType:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the payment method type
 *           example: "pmtype_001"
 *         paymentMethodTypeName:
 *           type: string
 *           description: Human-readable name of the payment method type
 *           example: "Debit Card"
 *         isDisabled:
 *           type: boolean
 *           description: Indicates if the payment method type is currently disabled
 *           example: false
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when this payment method type was created
 *           example: "2025-11-01T10:00:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when this payment method type was last updated
 *           example: "2025-11-02T10:00:00Z"
 *
 *     PaymentMethodTypes:
 *       type: array
 *       description: List of available payment method types
 *       items:
 *         $ref: '#/components/schemas/PaymentMethodType'
 *       example:
 *         - id: "pmtype_001"
 *           paymentMethodTypeName: "GPay"
 *           isDisabled: false
 *           createdAt: "2025-11-01T10:00:00Z"
 *           updatedAt: "2025-11-02T10:00:00Z"
 *         - id: "pmtype_002"
 *           paymentMethodTypeName: "Debit Card"
 *           isDisabled: false
 *           createdAt: "2025-11-01T10:00:00Z"
 *           updatedAt: "2025-11-02T10:00:00Z"
 *         - id: "pmtype_003"
 *           paymentMethodTypeName: "NetBanking"
 *           isDisabled: false
 *           createdAt: "2025-11-01T10:00:00Z"
 *           updatedAt: "2025-11-02T10:00:00Z"
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     # =====================
 *     # Category Schemas
 *     # =====================
 *     CategoryCreateRequest:
 *       type: object
 *       required:
 *         - categoryName
 *       properties:
 *         categoryName:
 *           type: string
 *           example: "Cafes & Restaurants"
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "b7f4b4b1-2e1f-4f3b-9e5a-1c2c89e4b92a"
 *         categoryName:
 *           type: string
 *           example: "Cafes & Restaurants"
 *         categoryType:
 *           type: string
 *           enum: [USER, SYSTEM]
 *           example: "USER"
 *         userId:
 *           type: string
 *           format: uuid
 *           nullable: true
 *           example: "b1a9d9df-3b41-4ed1-889e-75d8eae8332c"
 *         isDeleted:
 *           type: boolean
 *           example: false
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-10-08T07:24:06.416Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-10-08T07:24:06.416Z"
 */
export {}
