import multer from "multer"
import path from "path"

const imageStorage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "src/public/uploads")
    },

    filename:(req, file, cb) =>{
        cb(null, `image-${Date.now()}` + path.extname(file.originalname))
    }

})

export const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(png|jpg|jpeg)$/)){
            return cb(new Error("Por favor, envie apenas jpg, jpeg ou png"))
        }
        cb(undefined, true)
    }    
})


