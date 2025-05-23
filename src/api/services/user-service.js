import statusCode from "../../helpers/status-code.js";
import bcrypt from "bcrypt"
import { findUserByEmail } from "../repositories/user-repository.js";
import createToken from "../../middlewares/create-token.js";

export const validationsUser = async (req, res) =>{
    const { name, email, password, confPassword } = req.body

        if (!name) {
           res.status(statusCode.HTTP_BAD_REQUEST).json({ message: "O nome é obrigatório" })
           return 
        }

        if (!email) {
            res.status(statusCode.HTTP_BAD_REQUEST).json({ message: "O email é obrigatório." })
            return
        }

        if (!password) {
            res.status(statusCode.HTTP_BAD_REQUEST).json({ message: "A senha é obrigatória." })
            return
        }

        if (!confPassword) {
           res.status(statusCode.HTTP_BAD_REQUEST).json({ message: "A confimação de senha é obrigatório." })
           return
        }

        if (password !== confPassword) {
            res.status(statusCode.HTTP_UNPROCESSABLE_ENTITY).json({ message: "As senhas são diferentes." })
            return
        }

        const checkUser = await findUserByEmail(email)
       
        if(checkUser){
            res.status(statusCode.HTTP_UNPROCESSABLE_ENTITY).json({ message: "Email já cadastrado" })
            return
        }

        const passwordHash = await bcrypt.hash(password, 10)

        const userData = {
            name,
            email,
            password: passwordHash
        }

        return userData
}


export const loginUser = async (req, res) => {
   
    const {email, password } = req.body

    if (!email) {
        res.status(statusCode.HTTP_BAD_REQUEST).json({ message: "O email é obrigatório." })
        return
    }

    if (!password) {
        res.status(statusCode.HTTP_BAD_REQUEST).json({ message: "A senha é obrigatória." })
        return
    }

    const checkUser = await findUserByEmail(email)
       
    if(!checkUser){
        res.status(statusCode.HTTP_UNPROCESSABLE_ENTITY).json({ message: "O usuário não existe" })
        return
    }

    const checkPassword = await bcrypt.compare(password, checkUser.password)

    if(!checkPassword){
        res.status(statusCode.HTTP_UNPROCESSABLE_ENTITY).json({ message: "Senha incorreta" })
        return
    }
     
    createToken(checkUser, req, res)

    }
