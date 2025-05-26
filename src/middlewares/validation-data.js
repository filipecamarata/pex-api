import statusCode from "../helpers/status-code.js"
import getToken from "./get-token.js"
import getUserByToken from "./get-user-by-token.js"

export async function validationProductData(req, res) {
    const { name, description, subcategoria } = req.body
    
    let {price, categoryId } = req.body
    categoryId = Number(categoryId)

    price = parseFloat(price.replace(",", "."))
    const token = getToken(req, res)     
    const user = await getUserByToken(token)  
 
    const userId = user.id
    
    if (!name) {
      res.status(statusCode.HTTP_NOT_FOUND).json({ message: "O nome é obrigatório" })
        return 
    }

    if (!description) {
        res.status(statusCode.HTTP_NOT_FOUND).json({ message: "O descrição para o produto é obrigatório" })
        return 
    }
    
    if (!price) {
        res.status(statusCode.HTTP_NOT_FOUND).json({ message: "O preço para o produto é obrigatório" })
        return 
    }
 
    if (!categoryId) {
        res.status(statusCode.HTTP_NOT_FOUND).json({ message: "A categoria do produto é obrigatório" })
        return 
    }

    if (!subcategoria) {
        res.status(statusCode.HTTP_NOT_FOUND).json({ message: "A subcategoria do produto é obrigatório" })
        return 
    }     

    if (!userId) {
        res.status(statusCode.HTTP_NOT_FOUND).json({ message: "O id que vincula o usuario ao produto é obrigatório" })
        return 
    }

    return { name, description, subcategoria, price, userId, categoryId }
}
