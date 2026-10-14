const codeName = "Shadow Fox"
const backupName = String("Night Own")
const templateName = `Agent ${codeName}`  // String Interpolation

let intercepted = "HELLO"
intercepted[0] = "J" // Silent failure --- strings are immutable
console.log(intercepted);


const secretCode = "OMEGA-7"

console.log(secretCode.length);
console.log(secretCode.charAt(99)); // Empty string
console.log(secretCode[99]);  // Undefined 
console.log(secretCode.at(-1)); // 7


const rawTransmission = "The Eagle has Landed"
console.log(rawTransmission.toLowerCase());


const message =  "The drop point is at Dock 7. Reapeat: Dock 7"

console.log(message.indexOf("Dock"));

const orders = "move-north|hold-position|extract-vip"
const orderList = orders.split("|")
 console.log("Split",orderList);
 

 const myDataValue = "SOS".split("")

 console.log((typeof( myDataValue)));
 console.log(Array.isArray(myDataValue));
 
 

const missionNumber = '42'
console.log(missionNumber.padStart(6,0)); 


const spellCard  = `
+++++++++++++++++++=============
| SPell :${myDataValue}|
`

console.log(spellCard);


// const profile = `
// ${checker ? "true-value":"false-value"}
// `

console.log(void 0);


let generalStore = {naem:"kirana",goods:2}
console.log(generalStore);

generalStore = null   // Completely demolished
console.log(generalStore);
