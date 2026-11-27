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