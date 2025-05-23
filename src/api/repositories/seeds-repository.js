import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function createCategory(data) {
     await prisma.category.create({ data })
}