var shipName = 'The Amber'

console.log("ShipName", shipName);

let crewCount = 12
console.log("Crew Count :", crewCount);

crewCount = 14

const captainName = 'Jack Sparrow'
console.log("Captain Name :", captainName);

// captainName = "Hitesh "

if (true) {
    var leakyTreasure = 'Gold Coins'
}
console.log(leakyTreasure) // Var has a global scope level

const treasureChest = {
    gold: 100,
    rubies: 50,
    maps: 2
}

treasureChest.gold = 150 // Content manipulat
// treasureChest = { gold: 50 } // new reference ---- not allowed

const crewRoster = ['Alok','Abhinav',"Tasnish"]
crewRoster.push("vraj")
crewRoster[0] ="Kushal"

// crewRoster=["Aman"]  // not allowed /

