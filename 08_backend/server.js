import "dotenv/config"
import app from "./src/app.js"
import dbConnect from "./src/common/config/db.js"

const PORT = process.env.PORT || 8000

const start = async () => {
    //connect to database
    await dbConnect()
    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT} in ${process.env.NODE_ENV} mode`);

    })
}


start().catch((err) => {
    console.error("Failed to start Server", err);
    process.exit(1)
})