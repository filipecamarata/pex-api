import { Router } from "express"
import {imageUpload} from "../helpers/upload-img.js"
import ImageController from "../api/controllers/image-upload-controller.js"
import verifyToken from "../middlewares/verify-token.js"
const router = new Router()


router.post("/image", verifyToken, imageUpload.single("image"), ImageController.upload)

export default router