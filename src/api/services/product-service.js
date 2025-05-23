import * as productRepository from "../repositories/product-repository.js";

export async function createProduct(data) {
    const { name, description, userId, categoryId, imageId } = data

    const verififyImageExistis = await productRepository.findImageById(imageId)
    const verififyUserExistis = await productRepository.findUserById(userId)
    const verififyCategoryExistis = await productRepository.findCategoryById(categoryId)
    const existingProduct = await productRepository.findProductByImageId(imageId)
    const nomeJaCadastrado = await productRepository.nomeProdutoExistente(name.trim())
    
    if (nomeJaCadastrado) throw new Error("Já tem um Produto com esse nome.");
    
    if (!verififyUserExistis) throw new Error("Este usuário não existe!");
    
    if (!verififyCategoryExistis) throw new Error("Esta categoria não existe!");
    
    if (!verififyImageExistis) throw new Error("Esta imagem não está disponível!");
    
    if (existingProduct) throw new Error("Esta imagem já está vinculada a outro produto!");

    const product = {
        name: name.trim(),
        description: description.trim(),
        userId,
        categoryId,
        imageId
    }

    return await productRepository.createProduct(product)
}

export async function getAllProducts() {
    const products = await productRepository.getAllProducts()

    if (products.length <= 0) throw new Error("Nçao tem produtos cadastrados.")
    
    return products
}

export async function getProductsById(id) {
    if (isNaN(id)) throw new Error("ID invalido.")

    const product = await productRepository.getProductsById(id)

    if (!product) throw new Error("Produto não encontrado.")

    return product
}

export async function updateProduct(id, data) {
    const productExistss = await productRepository.getProductsById(id)

    if (!productExistss) throw new Error("Produto não encontrado.")

    return await productRepository.updateProduct(id, data)
}

export async function deleteProduct(id) {
    return await productRepository.deleteProduct(id)
}