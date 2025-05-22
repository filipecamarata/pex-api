import { Router } from "express";
const router = new Router()
import verifyToken from "../middlewares/verify-token.js"
import productsController from "../api/controllers/products-controller.js"

router.post("/", verifyToken, productsController.products)
router.get("/menu", productsController.getAllProducts)
router.get("/:id", verifyToken, productsController.getProductById)
router.patch("/:id", verifyToken, productsController.updateProducts)
router.delete("/:id", verifyToken, productsController.deleteProduct)

export default router