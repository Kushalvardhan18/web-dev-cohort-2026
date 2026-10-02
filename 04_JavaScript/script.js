function sayHello() {
    console.log("Hello,Kaise ho ap");
}
sayHello()


var fname = 'Kushal'
var lname = "Vardhan"

// JS is a Loosely Typed Language

console.log('Value of fname is ',fname);

fname = 'Aman'

console.log('Value of fname is ',fname);

fname = 32
console.log('Value of fname is ',fname);


function addNumbers(num1,num2){
    var result = num1 +num2
    console.log("Result is ",result)
}

addNumbers(2,3)
addNumbers(5,4)

// Conditionals --->

let num = 10

if(num>18){
    console.log('Vote is Allowed');
}
else{
    console.log("You are not allowed to Vote");
    
}


let age = 10

// var child = age <=12
// var teen = !child && age <=19
// var adult = !teen && age<=40
// var senior = !adult && age>40


var child = age <=12
var teen = age <=19
var adult = age<=40
var senior = age>40 && age<105

if(child){
    console.log("You are child");
}

else if(teen){
    console.log("You are Teen");
}

else if(adult){
    console.log("You are Adult");
}

else if(senior){
    console.log("You are Senior")
}

else{
    console.log("Sabhi condiotions false ho gyi");
    
}

