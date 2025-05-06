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
}