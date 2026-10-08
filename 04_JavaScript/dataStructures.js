// Data Structure

// memory mei data ko ek particular structure mi store karna


// 1---Arrays
const fruits = ['apple', 'orange', 'cheeku', 'kiwi', true]  // IN JS arrays is not necessarily  homogenous

fruits.push('mango')

console.log(fruits);

console.log(fruits.includes('apple'));

const firstElement = fruits.slice(2, 5)
console.log(fruits);

console.log({ firstElement });

// High Order Functions - A fn that takes another Fn as parameter 

function myFn(anotherFn) {
    return anotherFn() + 40
}

function cartoon() {
    return 10
}
function anotherNewFn() {
    return 100
}
console.log(myFn(anotherNewFn));


// function printFn(element) {
//     console.log(element);

// }
// fruits.forEach(printFn)

// fruits.forEach((e) => console.log(e))

forEach((xyz) => console.log(`${xyz}`))

function forEach(bataoKyKrnaHai) {
    for (let i = 0; i < fruits.length; i++) {
        bataoKyKrnaHai(fruits[i])
    }
}

const nums = [1, 2, 3, 4, 5, 6]

// const result = []

// for(let i =0;i<nums.length;i++){
//     result.push(nums[i]*2)
// }
// console.log(result);


// const result = nums.map((i) => i * 2)
const result = myMap((i) => i * 3)
console.log(result);

// Khudka map

function myMap(fn) {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        const currentElement = nums[i]
        const num = fn(currentElement)
        result.push(num)
    }
    return result
}
