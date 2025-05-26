import { validationProductData } from "../../middlewares/validation-data.js";
import * as productRepository from "../repositories/product-repository.js";

export async function createProduct(data) {
    const { name, description, subcategoria, price, userId, categoryId } = data

    const userExistis = await productRepository.findUserById(userId)
    const categoryExistis = await productRepository.findCategoryById(categoryId)
    const nameExistis = await productRepository.nomeProdutoExistente(name.trim())

    if (nameExistis) throw new Error("Já existe um produto cadastrado com este nome.!");
    if (!userExistis) throw new Error("Este usuário não existe!");
    if (!categoryExistis) throw new Error("Esta categoria não existe!");

    const product = {
        name: name.trim(),
        description: description.trim(),
        subcategoria: subcategoria.trim(),
        price: price.trim(),
        userId,
        categoryId
    }

    return await productRepository.createProduct(product)
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