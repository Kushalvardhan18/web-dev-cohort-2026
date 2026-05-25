const express = require('express')

function block_1_httpMethods() {
    return new Promise((resolve) => {
        const app = express()
        app.use(express.json())


        const routes = {
            1: {
                id: 1,
                name: "Dadar-Andheri Express",
                direction: "North"
            },
            2: {
                id: 2,
                name: "Bandra-Kurla shuttle",
                direction: "North"
            },
            3: {
                id: 3,
                name: "Rajdhani Express",
                direction: "North"
            },
        }

        let nextId = 4

        // list all trains
        app.get("/routes", (req, res) => {
            res.json(Object.values(routes))
        })


        // single route by id
        app.get("/routes/:id", (req, res) => {

            // const {id} = req.params
            // const route = routes[id]

            const route = routes[req.params.id]

            if (!route) return res.status(404).json({ error: "No train on this id" })

            res.json(route)
        })

        app.post('/routes', (req, res) => {
            const newRoute = { id: nextId++, ...req.body }
            routes[newRoute.id] = newRoute

            res.status(201).json(newRoute)
        })


        app.put("/routes/:id", (req, res) => {
            const id = req.params.id
            if (!routes[id]) {
                return res.status(404).json({
                    error: "Id doesn't exist"
                })

            }
            routes[id] = { id: Number(id), ...req.body }
        })

        app.patch("/routes/:id", (req, res) => {
            const id = req.params.id
            if (!routes[id]) {
                return res.status(404).json({
                    error: "Id doesn't exist"
                })

            }

            const { name } = req.body

            routes[id] = { ...routes[id], ...req.body, name }
            res.status(200).json({
                message: "Route updated successfully",
            });

        })

        app.delete("/routes/:id", (req, res) => {
            const id = req.params.id
            if (!routes[id]) {
                return res.status(404).json({
                    error: "Id doesn't exist"
                })

            }

            delete routes[id]
            res.status(204).end()

            const { name } = req.body

        })
        const server = app.listen(0, async () => {
            const port = server.address().port
            const base = `http://127.0.0.1:${port}`

            try {
                const listResponse = await fetch(`${base}/routes`)
                const listData = await listResponse.json()

                const createResponse = await fetch(`${base}/routes`, {
                    method: "POST",
                    headers: {
                        'Content-Type': "application/json",
                        body: JSON.stringify({
                            name: "Coloba-Worli",
                            direction: "South"
                        })
                    }
                })

               const created = await createResponse.json()
            } catch (error) {
                console.log(error);

            }

            server.close(() => {
                console.log("Block 1 served...");
                resolve()
            })
        })
    })
}

function block_2_httpMethods() {
    return new Promise((resolve) => {
        const app = express()
        app.use(express.json())

        app.get('/files/*filepath',(req,res)=>{
            const filepath = req.params.filepath  // wildcard
            res.json({filepath,type:"wildcard"})
        })
      


        app
            .route("/schedule")
            .get((req,res)=>{})
            .post((req,res)=>{})
            .put((req,res)=>{})
            .delete((req,res)=>{})


            app.use("/api",(req,res)=>{
                // its a prefetch match
            })


        const server = app.listen(0, async () => {
            const port = server.address().port
            const base = `http://127.0.0.1:${port}`

            try {
               
            } catch (error) {
                console.log(error);

            }

            server.close(() => {
                console.log("Block 1 served...");
                resolve()
            })
        })
    })
}

async function main() {
    await block_1_httpMethods
    await block_2_httpMethods

    process.exit(0)
}
main()