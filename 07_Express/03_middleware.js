function block_1_httpMethods() {
    return new Promise((resolve) => {
        const app = express()


        const logs = []

        app.use(express.json())


        // request logger 

        app.use((req, res, next) => {
            // add to database
            // console log everthing
            // write in some file
            // authentitcate a user
            const logEntry = `${req.method}:${req.url}`
            logs.push(logEntry)
            if (env === "PROD") {
                console.log(`[LOG] -- ${logEntry}`)

            }

            // if your request hangs forever

            next()
        })

        app.use((req, res, next) => {

            req.startTime = Date.now()
            res.on('finish', () => {
                const duration = Date.now() - req.startTime
                console.log(`[TIME] - ${req.method} -${req.url} took ${duration}ms`)
            })

            next()
        })



        function authMe(req, res, next) {
            const token = req.headers['x-auth-token']

            if (!token) {
                return res.status(401).json({ error: "No token, please login" })
            }

            if (token !== "secret-chaicode") {
                return res.status(403).json({
                    error: "Invalid Token"
                })
            }

            //token ----------> extract data from token -------> userId,email


            req.user = { id: 1, name: "kushal", role: "admin" }


            next()

        }


        // function getRole(role) {
        //     return (req, res, next) => {
        //         if (!req.user || req.user.role !== role) {
        //             return res.status(403).json({ error: `[ROLE] ${role} required` })
        //         }

        // next()
        //     }


        // }

        function getRole(role) {
            return (req, res, next) => {
                if (!req.user) {
                    return res.status(401).json({
                        error: 'Unauthorized'
                    })
                }

                if (!role.includes(req.user.role)) {
                    return res.status(403).json({ error: `[ROLE] ${role} required` })
                }

                next()
            }
        }

        app.get('/profile', authMe, getRole('admin'), Profile, () => { })
        app.get('/profile', authMe, getRole('teacher'), Profile, () => { })
        app.get('/profile', authMe, getRole('student'), Profile, () => { })
        app.get('/profile', authMe, getRole(['admin', 'teacher', 'student']), Profile, () => { })
    })
}