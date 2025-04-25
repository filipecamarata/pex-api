import { Router } from "express";
const router = Router()

import UserController from "../api/controllers/user-controller.js";

router.post("/", UserController.createUser)

export default router