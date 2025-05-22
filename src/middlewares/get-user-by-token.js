import { findUserById } from "../api/repositories/user-repository.js"
import jwt from "jsonwebtoken"
import statusCode from '../helpers/status-code.js'

import dotenv from "dotenv"
const envFile = `.env.${process.env.NODE_ENV}`
dotenv.config({path: envFile})

const getUserByToken = async  (token) =>{
    if(!token) {
        return res.status(statusCode.HTTP_UNAUTHORIZED).json({message: 'Acesso Negado'})
    }
       
    const decoded = jwt.verify(token, process.env.KEY_TOKEN)  
    
    const user = await findUserById(decoded.userId)    
   
    return user
}

export default getUserByToken
