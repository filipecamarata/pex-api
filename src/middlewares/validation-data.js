import statusCode from "../helpers/status-code.js"

export function validationProductData(req, res, next) {
    const { name, description, userId, categoryId, imageId } = req.body

    if (!name) {
        return res.status(statusCode.HTTP_NOT_FOUND).json({ message: "O nome é obrigatório" })
    }

    if (!description) {
        return res.status(statusCode.HTTP_NOT_FOUND).json({ message: "O descrição para o produto é obrigatório" })
    }

    if (!userId) {
        return res.status(statusCode.HTTP_NOT_FOUND).json({ message: "O id que vincula o usuario ao produto é obrigatório" })
    }

    if (!categoryId) {
        return res.status(statusCode.HTTP_NOT_FOUND).json({ message: "A categoria do produto é obrigatório" })
    }

    if (!imageId) {
        return res.status(statusCode.HTTP_NOT_FOUND).json({ message: "A imagem para o produto é obrigatório" })
    }

    next()
}