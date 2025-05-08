import statusCode from "../../helpers/status-code.js";
import * as producsServices from "../services/product-service.js";

export default class producsController {
    static async products(req, res) {
        const data = req.body

        try {
             await producsServices.createProduct(data)
            res.status(statusCode.HTTP_CREATED).json({ message: "Produto cadastrado com secesso" })
        } catch (error) {
            res.status(statusCode.HTTP_UNPROCESSABLE_ENTITY).json({
                message: error.message || "Erro ao cadastrar Produto!",
            });
        }
    }

    static async getAllProducts(req, res) {
        try {
            const products = await producsServices.getAllProducts()
            res.status(statusCode.HTTP_OK).json(products)
        } catch (error) {
            res.status(statusCode.HTTP_NOT_FOUND).json({ message: error.message });
        }
    }

    static async getProductById(req, res) {
        const id = parseInt(req.params.id, 10);

        try {
            const product = await producsServices.getProductsById(id)
            res.status(statusCode.HTTP_OK).json(product)
        } catch (error) {
            res.status(statusCode.HTTP_NOT_FOUND).json({ message: error.message });
        }
    }

    static async updateProducts(req, res) {
        const id = parseInt(req.params.id, 10);
        const data = req.body

        try {
            const updatedProduct = await producsServices.updateProduct(id, data)
            res.status(statusCode.HTTP_OK).json({ message: "Produto Atualizado com secesso", updatedProduct })
        } catch (error) {
            res.status(statusCode.HTTP_UNPROCESSABLE_ENTITY).json({
                message: error.message
            });
        }
    }

    static async deleteProduct(req, res) {
        const id = parseInt(req.params.id, 10);

        try {
            await producsServices.deleteProduct(id)
           res.status(statusCode.HTTP_OK).json({ message: "Produto removido com sucesso" })
       } catch (error) {
           res.status(statusCode.HTTP_UNPROCESSABLE_ENTITY).json({
               message: error.message || "Erro ao Remover Produto!",
           });
       }
    }
}