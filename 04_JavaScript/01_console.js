const clue1 = 'Muddy footprint near the window'
const clue2 = 'Broken glass on the table'


console.log("Clue found :", clue1);
console.log("Clue found :", clue2);

const suspectName = "Kushal"
const suspectAge = 20

console.log("Suspect :", suspectName, "| Age :", suspectAge)

console.warn("Warning : Fingerprint evidence detected")
console.error("Warning : Fingerprint evidence detected")

const evidenceLog = [
    {id:1,item:"Muddy Footprint",location:"Window sill"},
    {id:2,item:"Broken glass",location:"Living room"},
    {id:3,item:"Red fiber strand",location:"Door handle"}
]

console.table(evidenceLog)


console.group("Group starts")
console.log("My log 1")
console.log("My log 2")

console.groupEnd()

console.time('time starts now')

let dnaMatches = 0
for(let i =0;i<1000;i++){
    dnaMatches++
}
console.timeEnd('time starts now')