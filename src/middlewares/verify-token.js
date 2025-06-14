import jwt from "jsonwebtoken"

import statusCode from "../helpers/status-code.js"

const verifyToken = (req, res, next) =>{
    if(!req.headers.authorization){
        return res.status(statusCode.HTTP_UNAUTHORIZED).json({
            message: "Acesso negado"
        })
    }
       
    const tokenHeadres = req.headers.authorization     
    const token = tokenHeadres.split(" ")[1]
    
    if(!token){
        return res.status(statusCode.HTTP_UNAUTHORIZED).json({
            message: "Acesso negado"
        })
    }
  
    try {
        const verified = jwt.verify(token, process.env.KEY_TOKEN)
        req.user = verified
        next()
    } catch (error) {        
        res.status(statusCode.HTTP_BAD_REQUEST).json({message: 'Token inválido'})
        return 
    }  
}

export default verifyToken