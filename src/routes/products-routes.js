import { Router } from "express";
const router = new Router()

import productsController from "../api/controllers/products-controller.js"


router.post("/", productsController.products)


export default router