import { UserService } from "../services/user-service.js";
import statusCode from "../../helpers/status-code.js";

export default class UserController {
    static async createUser(req, res) {
        const { name, email, password, confPassword } = req.body

        if (!name) {
            return res.status(statusCode.HTTP_BAD_REQUEST).json({ message: "O nome é obrigatório!" })
        }

        if (!email) {
            return res.status(statusCode.HTTP_BAD_REQUEST).json({ message: "O email é obrigatório.!" })
        }

        if (!password) {
            return res.status(statusCode.HTTP_BAD_REQUEST).json({ message: "A senha é obrigatória.!" })
        }

        if (!confPassword) {
            return res.status(statusCode.HTTP_BAD_REQUEST).json({ message: "A confimação de senha é obrigatório.!" })
        }

        if (password !== confPassword) {
            return res.status(statusCode.HTTP_UNPROCESSABLE_ENTITY).json({ message: "As senhas são diferentes.!" })
        }

        const userData = {
            name,
            email,
            password
        }

        try {
            const user = await UserService.createUser(userData)
            res.status(statusCode.HTTP_CREATED).json(user)
        } catch (error) {
            if (error.message) return res.status(statusCode.HTTP_UNPROCESSABLE_ENTITY).json({message: `${error.message}` })
            res.status(statusCode.HTTP_UNPROCESSABLE_ENTITY).json({message: `Erro ao cadastrar User!` })
        }
    }
}