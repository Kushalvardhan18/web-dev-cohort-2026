// Function - A Reusable set of Instructions
// A block of code designed to perform a specific task

function sayHello() {
    console.log("Hello");
}

sayHello()


// Passing Parameters in function --->
function greetUser(x, y, z) {
    console.log('Hey', x, y, z);

}

greetUser("Kushal", "Vardhan", "Software Developer")


function add(num1, num2) {
    // console.log(`Result is ${num1 + num2}`);
    const result = num1 + num2
    return result
}
const r = add(5, 9)

console.log(r);


function cartoon() {
    function cartoonInsideCartoon() {
        return 'Naruto'
    }
    return cartoonInsideCartoon()
    // return cartoonInsideCartoon

}
const anime = cartoon()

// const an = anime()
console.log(anime);


let cartoon2 = function () {
    console.log('Anime')
}

cartoon2()


age = 45
// console.log('Value of age is', age, 'Is Allowed', isAllowedToVote(age))
var age = 24

// var isAllowedToVote = function (age) {
//     return age >= 18
// }

// vlaue of var is not hoisted in isAllowedToVote so it will be undefined and will show error


//Arrow fns 
const isAllowedToVote = () => age >= 18

const isUserAllowedToOpenBankAccount = (age, minBalance)=>
    age >= 18 && minBalance >= 500


console.log(isAllowedToVote(23))

console.log(isUserAllowedToOpenBankAccount(45,900));
