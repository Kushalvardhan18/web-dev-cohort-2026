import mongoose, { Schema } from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 50,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        minlength: 8,
        required: [true, "Password is required"],
        select: false
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verificationToken: { type: String, select: false },
    refreshToken: { type: String, select: false },
    resetPasswordToken: { type: String, select: false },
    resetPasswordExpires: { type: Date, select: false },

}, { timestamps: true })

userSchema.pre('save', async function (next) {
    if (!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, 12)
    next()
})


userSchema.methods.comparePassword = async function (clearTextPassword) {
   return  bcrypt.compare(clearTextPassword, this.password)
}

export default mongoose.model("User", userSchema)
//users --- when goes in db it becomes plural and lowercase
