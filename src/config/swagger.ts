import swaggerJSDoc from "swagger-jsdoc"

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Zenri API",
      version: "1.0.1"
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: 'Enter your JWT token in the format "Bearer <token>"'
        }
      }
    }
  },
  apis: ["./src/routes/*.ts","./src/swagger/*.ts"]
}

export const swaggerSpec = swaggerJSDoc(swaggerOptions)