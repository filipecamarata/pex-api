import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import statusCode from "../helpers/status-code.js";
const envFile = process.env.NODE_ENV === 'dev' ? '.env.dev' :'.env'
dotenv.config({path: envFile})

const createToken = (user, req, res) =>{

    const token = jwt.sign({
        name: user.name,
        userId: user.id
    }, process.env.KEY_TOKEN)

    res.status(statusCode.HTTP_OK).json({
        message: "Login realizado com sucesso", 
        token: token,
        name: user.name,
        userId: user.id        
    })
}


export default createToken