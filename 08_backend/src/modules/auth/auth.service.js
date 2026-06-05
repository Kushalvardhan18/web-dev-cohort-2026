import ApiError from "../../common/utils/api-error.js"
import { generateResetToken } from "../../common/utils/jwt.utils.js"
import User from "./auth.model.js"
const register = async ({ name, email, password, role }) => {
    const existingUser = await User.findOne({ email })

    if (existingUser) throw ApiError.conflict("Email Already Exists")

    const { rawToken, hashedToken } = generateResetToken()

    const user = await User.create({
        name,
        email,
        password,
        verificationToken: hashedToken
    })

    console.log(user);

    // const userObj = user.toObject()
    // delete userObj.password
    // delete userObj.verificationToken

    return userObj
    //send an email to user with token:rawToken
}
export { register }