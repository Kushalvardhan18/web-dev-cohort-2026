const weaponName = 'Flame sword'
console.log("Weapon :",weaponName ,"| type :",typeof(weaponName))

// const attackPower = 75
const attackPower = 75n  // Big integer --- large number
const attackUpgrade = 1.5


console.log(typeof(attackPower))
console.log(typeof(attackUpgrade))

const isLoggedIn = true

let bonusEffect
let curseStatus = null  // value is intentially absent 

console.log(typeof(curseStatus));


const uniqueRuneID = Symbol("rune_of_Fire")

console.log("Rune :",uniqueRuneID.toString()); // toString()  must use with symbols



const heroStats ={
    name:"Deepak",
    level:12,
    class:"Ranger"
}

console.log("Hero: ",heroStats , "| type: ",typeof(heroStats));

const inventory = ["Flane sword","Health Potion","Shield"]
console.log("Inventory: ",inventory,"| type: ",typeof(inventory));

function castSpell(){
    return "Fireball"
}

console.log("Spell type:",typeof castSpell);

console.log(typeof 42);
console.log(typeof "chaicode");
console.log(typeof 42n);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol());
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});


let originalHP = 100
let cloneHp = originalHP

cloneHp =80
console.log("Original Hp",originalHP);
console.log("Clone Hp",cloneHp);


const originalSword ={
    name:"Flame",
    damage:75,
    typeofW:"Fire"
}

const cloneSword = originalSword

cloneSword.damage =100

console.log(cloneSword);
console.log(originalSword);


const armorOriginal ={
    name:"Iron Plate",
    defence:80,
    buff:{
        fire:10,
    },
}

const cloneArmor = {...armorOriginal}  // to copy an object we use spread operator

cloneArmor.buff.fire =90 // change the original object also


const potionOriginal ={
    name:"Health",
    effects:{
        heal:40,
        mana:30
    }
}
const potionClone = structuredClone(potionOriginal)
potionClone.effects.heal =20

console.log("Original Potion :",potionOriginal);
console.log("Cloned Potion :",potionClone);
