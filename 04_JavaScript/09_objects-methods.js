const artifact = {
    name: "Obsidian Crown",
    era: "Ancient",
    value: 50000,
    material: "volcanic glass",
}

const keys = Object.keys(artifact)
const values = Object.values(artifact)
const entries = Object.entries(artifact)

console.log(keys);
console.log(values);
console.log(entries);

// From Object to Array of Arrays
for (const [key, value] of Object.entries(artifact)) {
    console.log(`${key} : ${value}`);

}

const priceList = [
    ["Obsidian Crown", 50000],
    ["Ruby Pendant", 30000],
    ["Iron Shield", 5000],
]


// Array of Arrays to Object
const priceObject = Object.fromEntries(priceList)
console.log(priceObject);

const displayCase = {
    artifact: "Obsidian",
    location: "Hall A,Case 3",
    locked: true
}

Object.freeze(displayCase)

delete displayCase.locked
displayCase.newProp = "test"
console.log(displayCase);


const catalogEntry = {
    id: "ART-001",
    description: "Ancient Crowns",
    verified: true
}
Object.seal(catalogEntry)

// Seal allows to edit in the existing properties but can't add new or delete properties 

const secureArtifacts = {
    name: "Ruby Pendant"
}

Object.defineProperty(secureArtifacts,"catelogId",{
    value:"SEC-999",
    writable:false,
    enumerable:true,
    configurable:false
})

console.log(secureArtifacts.catelogId);

secureArtifacts.catelogId ="HACKED"

console.log(secureArtifacts.catelogId);


