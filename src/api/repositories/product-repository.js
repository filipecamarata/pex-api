import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function createProduct(data) {
    return await prisma.product.create({ data })
}

export async function findUserById(userId) {
    return await prisma.user.findUnique({ where: { id: userId }})
}

export async function findCategoryById(categoryId) {
    return await prisma.category.findUnique({ where: { id: categoryId }})
}

export async function getAllProducts() {
    return await prisma.product.findMany()
}

export async function getProductsById(id) {
    return await prisma.product.findUnique({ where: { id: id } })
}

export async function updateProduct(id, data) {
    return await prisma.product.update({ where: { id }, data })
}

export async function deleteProduct(id) {
    return await prisma.product.delete({ where: { id } })
}

export async function nomeProdutoExistente(nome) {
    return  await prisma.product.findFirst({
        where: {
            name: {
                equals: nome,
                mode: "insensitive" // ignora maisculas e menusculas
            }
        }
    })
}