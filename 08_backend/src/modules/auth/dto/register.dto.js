import Joi from "joi"
import BaseDto from "../../../common/dto/base.dto.js"
class RegisterDto extends BaseDto {
    static schema = Joi.object({
        name: Joi.string().trim().min(2).max(50).required(),
        email: Joi.string().trim().email().lowercase().min(5).max(20).required(),
        password: Joi.string().trim().min(8).max(20).required().message("Password must contain 8 chars minimum"),
        role: Joi.string().valid("user", "admin").default("user")
    })
}


export default RegisterDto