import * as authService from "./auth.service.js"
import ApiResponse from "../../common/utils/api-response.js"

const register = async (req, res) => {
    const user = await authService.register(req.body)
    ApiResponse.created(res, "Registration success", user)
}
const login = async (req, res) => {
    const { user, accessToken, refreshToken } = await authService.logIn(req.body)

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
    // res.cookie("accessToken",accessToken,{
    //     httpOnly:true,
    //     secure:true,
    //     maxAge:7*24*60*60*1000
    // })

    // res.setHeader("Authorization", `Bearer ${accessToken}`);
    // res.setHeader("X-Refresh-Token", refreshToken);

    ApiResponse.ok(res, "Login successful", { user, accessToken })
}
const resetPassword = async () => { }


const logOut = async (req, res) => {

    await authService.logOut(req.user.id)
    res.clearCookie("accessToken")
    res.clearCookie("refreshToken")

    ApiResponse.ok(res, "Logged out successfully")
}


const getMe = async (req, res) => {
    const user = authService.getMe(req.user.id)
    ApiResponse.ok(res, "User Profile", user)
}
export { register, login, resetPassword, logOut, getMe } 