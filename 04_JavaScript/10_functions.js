console.log(brewPotion("Healing Herbs",3));

function brewPotion(ingredient,dose){
    return `Brewing Potion with ${ingredient} (x${dose}... Potion ready)`
}

const mixElixir = function(ingredient){
    return `Mixing elixir with ${ingredient}`
}

// no own 'this' , no 'arguments' object   in arrow fns.
const distilEssence = (ingredient) =>{
    return `Mixing elixir with ${ingredient}`
}

function oldBrewingLogs(){
    console.log("Type: ",typeof arguments)
    console.log("Is Array: ", Array.isArray(arguments));
    const argsArray = Array.from(arguments)
    console.log(argsArray);
}

oldBrewingLogs("Sage","Rosemary")

const arrowBrew =() =>{
    try {
        console.log(arguments);
        
    } catch (error) {
        console.log(error.message);
        
    }
}
arrowBrew("Sage")




let globalCount = 0
// Impure Fn - It depends on external state or mutating external value
// Side-Effect - Change happening outside the scope of fn.
function brewAndCount(name){
    globalCount++
}

const potionShop = (function(){
    let inventory =0

    return {
        brew(){
            inventory++
            return `Brew potion #${inventory}`
        },
        getStock(){
            return inventory
        }
    }
})()

console.log(potionShop);
console.log(potionShop.brew());
console.log(potionShop.getStock());
console.log(potionShop.inventory);


function makeFunc(){
    const name = "Mozilla"
    const name2 ="firefox"
    function displayName(){
        console.log(name);
        return name2
    }
    return displayName
}

const myFunc = makeFunc()
myFunc()
console.log(myFunc());

