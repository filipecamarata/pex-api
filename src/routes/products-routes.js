import { Router } from "express";
const router = new Router()
import verifyToken from "../middlewares/verify-token.js"
import { validationProductData } from "../middlewares/validation-data.js"

import productsController from "../api/controllers/products-controller.js"

router.post("/", verifyToken, validationProductData, productsController.products)

export default router