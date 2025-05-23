import jwt from "jsonwebtoken";
import statusCode from "../helpers/status-code.js";

const createToken = (user, req, res) =>{

    const token = jwt.sign({
        name: user.name,
        userId: user.id
    }, process.env.KEY_TOKEN, {expiresIn: "1h"})

    res.status(statusCode.HTTP_OK).json({
        message: "Login realizado com sucesso", 
        token: token,
        name: user.name,
        userId: user.id        
    })
}

export default createToken