import statusCode from "../../helpers/status-code.js";
import * as productRepository from "../repositories/product-repository.js";

export async function createProduct(data) {
    // const verififyImageExistis = await productRepository.findImageById(data.imageId)
    const verififyUserExistis = await productRepository.findUserById(data.userId)

    const verififyCategoryExistis = await productRepository.findCategoryById(data.categoryId)
    // const existingProduct = await productRepository.findProductByImageId(data.imageId);
    
    
    if (!verififyUserExistis) throw new Error("Este usuário não existe!");
    
    if (!verififyCategoryExistis) throw new Error("Esta categoria não existe!");
    
    // if (!verififyImageExistis) throw new Error("Esta imagem não está disponível!");
    
    // if (existingProduct) throw new Error("Esta imagem já está vinculada a outro produto!");

    return await productRepository.createProduct(data)
}

export async function getAllProducts() {
    const products = await productRepository.getAllProducts()

    if (products.length == 0) throw new Error("Não tem produtos cadastrados.")
    
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