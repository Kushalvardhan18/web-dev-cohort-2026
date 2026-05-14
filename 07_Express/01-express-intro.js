const express = require('express')


function block_1_basicServer() {
    return new Promise((resolve) => {
        const app = express()
        app.use(express())

        app.get("/menu", (req, res) => {
            res.json({
                items: [
                    'thali', 'biryani',
                ]
            })
        })

        // Query Params
        app.get('/search', (req, res) => {
            const { q, limit } = req.query
            res.json({
                query: q,
                limit: limit || '0'
            })
        })


        // Route/path Params
        app.get("menu/:id", (req, res) => {
            const { id } = req.params
            res.json({
                item: id,
                price: 149
            })
        })

        // Post Route
        app.post("/order", (req, res) => {
            const { order } = req.body
            res.status(201).json({
                status: 'created',
                order: order
            })
        })


        const server = app.listen(0, async () => {
            const port = server.address().port
            const base = `127.0.0.1:${port}`

            try {
                const menuResponse = await fetch(`${base}/menu`)

                const menuData = await menuResponse.json()

                console.log('GET /menu', JSON.stringify(menuData));


                console.log("+++++++++++++++++++++++++++++++++++");

                const searchResponse = await fetch(`${base}/search?q=biryani&limit=5`)

                const searchData = await searchResponse.json()
                console.log('GET /search', JSON.stringify(searchData));

                console.log("+++++++++++++++++++++++++++++++++++++++++++");

                const menuItemResponse = await fetch(`${base}/menu/42`)

                const menuItemData = await menuItemResponse.json()
                console.log('GET /menu/id', JSON.stringify(menuItemData));

                console.log("+++++++++++++++++++++++++++++++++++++++++++");

                const orderResponse = await fetch(`${base}/order`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        body: JSON.stringify({
                            dish: "biryani",
                            quantity: 2
                        })
                    }
                })

                const orderData = await orderResponse.json()
                console.log('POST /order', JSON.stringify(orderData));

                console.log("+++++++++++++++++++++++++++++++++++++++++++");


            } catch (error) {
                console.log(error);

            }

            server.close(()=>{
                console.log("Block 1 served...");
                resolve()
            })
        })
    })
}

async function main() {
    await block_1_basicServer()

    process.exit(0)
}
main()