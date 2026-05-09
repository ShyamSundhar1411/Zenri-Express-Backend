import { PrismaClient } from "../generated"
import { PrismaPg } from "@prisma/adapter-pg"
import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.DIRECT_URL,
})

const adapter = new PrismaPg(pool)
const prismaClient = new PrismaClient({
  adapter
})

export default prismaClient
