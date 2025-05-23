import { Router } from "express"
import {imageUpload} from "../helpers/upload-img.js"
import SeedsController from "../api/controllers/seeds-controller.js"
import verifyToken from "../middlewares/verify-token.js"
const router = new Router()


router.post("/image", verifyToken, imageUpload.single("image"), SeedsController.upload)
router.post("/category", verifyToken, SeedsController.category)

export default router