import prisma from "../../prisma/prisma-client.js"

export async function createProduct(data) {
    return await prisma.product.create({ data })
}

export async function findImageById(imageId) {
    return await prisma.images.findUnique({ where: { id: imageId }})
}

export async function findUserById(userId) {
    return await prisma.user.findUnique({ where: { id: userId }})
}

export async function findCategoryById(categoryId) {
    return await prisma.category.findUnique({ where: { id: categoryId }})
}

export async function findProductByImageId(imageId) {
    return await prisma.product.findUnique({ where: { imageId } });
}
