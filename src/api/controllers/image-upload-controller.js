import statusCode from "../../helpers/status-code.js"

export default class ImageController{
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

}