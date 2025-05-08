import statusCode from "../../helpers/status-code.js";
import * as productRepository from "../repositories/product-repository.js";

export async function createProduct(data) {
    const verififyImageExistis = await productRepository.findImageById(data.imageId)
    const verififyUserExistis = await productRepository.findUserById(data.userId)
    const verififyCategoryExistis = await productRepository.findCategoryById(data.categoryId)
    const existingProduct = await productRepository.findProductByImageId(data.imageId);
    
    
    if (!verififyUserExistis) throw new Error("Este usuário não existe!");
    
    if (!verififyCategoryExistis) throw new Error("Esta categoria não existe!");
    
    if (!verififyImageExistis) throw new Error("Esta imagem não está disponível!");
    
    if (existingProduct) throw new Error("Esta imagem já está vinculada a outro produto!");

    return await productRepository.createProduct(data)
}