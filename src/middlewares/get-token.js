import statusCode from "../helpers/status-code.js"

const getToken = (req, res) =>{
    const auth = req.headers.authorization

    if(!auth){
        res.status(statusCode.HTTP_UNAUTHORIZED).json({ message: "Acesso negado." })
        return
    }

    const token = auth.split(" ")[1]
  
    return token

}

export default getToken