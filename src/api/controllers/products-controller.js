import statusCode from "../../helpers/status-code.js";

export default class producsController {
    static async products(req, res) {
        const user = await validationsUser(req, res)
        if(!user)return
            
        try {
             await createUser(user)
            res.status(statusCode.HTTP_CREATED).json({message: "Usuário cadastrado com secesso"})
        } catch (error) {         
            res.status(statusCode.HTTP_UNPROCESSABLE_ENTITY).json({message: `Erro ao cadastrar User!`, error })
        }
    }

    static async login(req, res) {
      await  loginUser(req, res)

    }
}