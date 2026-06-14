import Joi from "joi";

import BaseDto from "../../../common/dto/base.dto.js";

class LoginDto extends BaseDto {
    static schema = Joi.object({
        email: Joi.string().trim().email().lowercase().min(5).max(50).required(),
        password:Joi.string().trim().min(8).max(50).required().message("Password must contain minimum 8 characters")
    })
}

export default LoginDto