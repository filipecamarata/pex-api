import statusCode from "../../helpers/status-code.js"
import { createCategory } from "../repositories/seeds-repository.js"

export default class SeedsController{
    static async upload(req, res){
        const { name }= req.body
        const img = req.file

        if(!name){
            res.status(statusCode.HTTP_UNPROCESSABLE_ENTITY).json({ message: "O nome é obrigatória." })
            return
           }

        if(!img){
            res.status(statusCode.HTTP_UNPROCESSABLE_ENTITY).json({ message: "A imagem é obrigatória." })
            return
        }

        const data ={
           name: name,
           path: img.path 
        }

        console.log(data)

        try {
            await prisma.images.create({data}) 
            res.status(statusCode.HTTP_CREATED).json({ message: "Imagem cadastrada com sucesso." })
        } catch (error) {
            res.status(statusCode.HTTP_UNPROCESSABLE_ENTITY).json({ message: "Erro ao cadastrar imagem.", error })
        }  

    }

    static async category(req, res){
         const { name } = req.body

        
         if (!name) {
        res.status(statusCode.HTTP_NOT_FOUND).json({ message: "O nome é obrigatório" })
        return    }
        
        const data = { name}

        try {            
        await createCategory(data)
         res.status(statusCode.HTTP_CREATED).json({message: "Cadastrado com sucesso"})
         return     
        } catch (error) {
            res.status(statusCode.HTTP_BAD_REQUEST).json({message: error})
        }

    }

}