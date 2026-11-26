const orders = [
    { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
    { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
    { dish: "Caseser Salad", price: 9, spicy: false, qty: 3 },
    { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
    { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 }
]

const myData = orders.forEach((order, index) => {
    console.log(`# ${index + 1} : ${order.qty} X ${order.dish}`);

})

console.log(myData);


const newData = orders.map(o => ` ${o.dish} : ${o.price * o.qty}`)

console.log(newData);


console.log(orders);



const filteredData = orders.filter(order => order.spicy)
console.log(filteredData);


const totalRevenue = orders.reduce((sum, order) => {
    return sum + (order.qty * order.price)
}, 1)

console.log(totalRevenue);

const grouped = orders.reduce((acc, order) => {
    const category = order.spicy ? "spicy" : "mild"
    acc[category].push(order.dish)
    return acc
}, { spicy: [], mild: [] })

console.log(grouped);


const ticketNumbers = [10, 25, 3, 9, 2]
const sortedTicket = [...ticketNumbers].sort((a, b) => a - b)  // sort method sorted as a string by default
console.log(sortedTicket);

const marks = [10, 60, 86, 26, 58, 29]

console.log(marks.toSorted((a,b)=>a-b));

// There is no way to break and stop a forEach(). Other than showing an exception.
// forEach() is a synchronous fn . It doesn't have any effect of await and async.
// It doesn't wait for promises.
marks.forEach((mark) => {
    console.log(mark * 2)
})


const kitchenOrders = [
    { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
    { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
    { dish: "Caseser Salad", price: 9, spicy: false, qty: 3 },
    { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
    { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
    { dish: "Ghost Pepper Soup", price: 15, spicy: false, qty: 1 },
]

const mildReport = kitchenOrders
    .filter(order => !order.spicy)
    .map(order => ({
        dish: order.dish,
        total: order.price * order.qty
    }))
    .toSorted()
console.log(mildReport);
