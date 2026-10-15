const carriage1 = ["Veer","Ayush","Ravi"]

const emptyCarriage = []

const threeEmptySeats = Array(3)
console.log(threeEmptySeats);

const passenger = Array("Veer","Ayush","Ravi")

const singlePassenger = Array.of(3)  // length of array is not defined 
singlePassenger.push(5)
console.log(singlePassenger);

console.log(singlePassenger.length);

const trainCode = Array.from("DUST")
console.log(trainCode);

const tempTrain = ["A","B","C","D","E"]
tempTrain.length = 3
console.log(tempTrain);
tempTrain.length = 5
console.log(tempTrain);
