import jwt from "jsonwebtoken"
import dotenv from "dotenv"

const envFile = "NODE_ENV" ? "dev" : "prod"
dotenv.config({path: envFile}) 

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
        return res.status(statusCode.HTTP_BAD_REQUEST).json({message: 'Token inválido'})
    }  
}

export default verifyToken