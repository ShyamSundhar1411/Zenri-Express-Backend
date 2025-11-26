import { PrismaClient } from "../generated"

const prismaClient = new PrismaClient({
    transactionOptions: {
    maxWait: 5000,        
    timeout: 30000,       
  },
})

export default prismaClient
