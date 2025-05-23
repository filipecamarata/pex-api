import statusCode from "../helpers/status-code.js"
import getUserByToken from "./get-user-by-token.js"
import getToken from "./get-token.js"


export async function validationProductData(req, res) {
    const { name, description, subcategoria } = req.body
    
    let {price, categoryId } = req.body
    categoryId = Number(categoryId)
    price = Number(price)

    const token = getToken(req, res)   
    const user = await getUserByToken(token)
    
    const userId = user.id
    console.log(user.id)
    if (!name) {
        return res.status(statusCode.HTTP_NOT_FOUND).json({ message: "O nome é obrigatório" })
    }

    if (!description) {
        return res.status(statusCode.HTTP_NOT_FOUND).json({ message: "O descrição para o produto é obrigatório" })
    }
    
    if (!price) {
        return res.status(statusCode.HTTP_NOT_FOUND).json({ message: "O preço para o produto é obrigatório" })
    }
 
    if (!categoryId) {
        return res.status(statusCode.HTTP_NOT_FOUND).json({ message: "A categoria do produto é obrigatório" })
    }
    if (!subcategoria) {
        return res.status(statusCode.HTTP_NOT_FOUND).json({ message: "A subcategoria do produto é obrigatório" })
    }

     

    // if (!imageId) {
    //     return res.status(statusCode.HTTP_NOT_FOUND).json({ message: "A imagem para o produto é obrigatório" })
    // }


      if (!userId) {
        return res.status(statusCode.HTTP_NOT_FOUND).json({ message: "O id que vincula o usuario ao produto é obrigatório" })
    }

    const data ={name, description, price, categoryId, subcategoria, userId}

    return data
}