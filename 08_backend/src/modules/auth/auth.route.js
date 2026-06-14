import { Router } from "express"
import * as controller from "./auth.controller.js"
import validate from "../../common/dto/base.dto.js"
import RegisterDto from "./dto/register.dto.js"
import { isLoggedIn } from "./auth.middleware.js"
import LoginDto from "./dto/login.dto.js"

const router = Router()

router.post("/register", validate(RegisterDto), controller.register)

router.post("/login", validate(LoginDto), controller.login)

router.get("/me", isLoggedIn, controller.getMe)

export default router