import { Router } from "express";
const router = new Router()

import UserController from "../api/controllers/user-controller.js";

router.post("/", UserController.createUser)
router.post("/login", UserController.login)

export default router