import { decode } from "punycode"
import ApiError from "../../common/utils/api-error.js"
import { generateAccessToken, generateRefreshToken, generateResetToken, verifyRefreshToken } from "../../common/utils/jwt.utils.js"
import User from "./auth.model.js"

const hashToken = (token) => crypto.createHash("sha256").update(token).digest("hex")

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

    const userObj = user.toObject()
    delete userObj.password
    delete userObj.verificationToken

    return userObj
    //send an email to user with token:rawToken
}

const login = async ({ email, password }) => {
    const user = await User.findOne({ email }).select("+password")
    if (!user) throw ApiError.unauthorized("Invalid Email or password")


    if (!user.isVerified) throw ApiError.forbidden("Please verify your email before login")
    const accessToken = generateAccessToken({ id: user._id })
    const refreshToken = generateRefreshToken({ id: user._id })

    user.refreshToken = hashToken(refreshToken)
    await user.save({ validateBeforeSave: false })

    const userObj = user.toObject()
    delete userObj.password
    delete userObj.refreshToken

    return { user: userObject, accessToken, refreshToken }
}

const refresh = async (token) => {
    if (!token) throw ApiError.unauthorized("Refresh token missing")
    const decoded = verifyRefreshToken(token)

    const user = await User.findById(decode.id).select("+refreshToken")
    if (!user) throw ApiError.unauthorized("User not found")

    if (user.refreshToken !== hashToken(token)) throw ApiError.unauthorized("Invalid refresh token")
    const accessToken = generateAccessToken({ id: user._id })
    const refreshToken = generateResetToken({ id: user._id })


    user.refreshToken = hashToken(refreshToken)
    await user.save({ validateBeforeSave: false })

    const userObj = user.toObject()
    delete userObj.password
    delete userObj.refreshToken
    return { user: userObj, accessToken, refreshToken }
}

export { register, login, refresh }