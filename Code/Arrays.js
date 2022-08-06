// Array //

const myArray = [];


// add elements to an array
myArray[0] = "Tiaan";
myArray[1] = 1001;
myArray[2] = false;


// refer to an array
console.log(myArray);  // > (3) ["Tiaan", 1001, false]

// length property
console.log(myArray.length);  // > 3

// last element in an array
console.log(myArray[myArray.length - 1]);  // > false

console.log(myArray[1]);  // > 1001
 

// adding elements
myArray.push("school");  // .push() adds an element at the back of array, .unshift() adds to the front of array.

console.log(myArray);  // > (4) ["Tiaan", 1001, false, "school"]


// removing elements
const lastItem = myArray.pop();  // .pop() removes element from back of array, .shift() removes from front of array.

console.log(lastItem);  // > school

// .splice() 
myArray.splice(1, 1, 42);  // (start at 1, remove 1 element, replacement value)

console.log(myArray);  // > (3) ["Tiaan", 42, false]
console.log(myArray[1]);  // > 42

// Example //
const anArray = ["A", "B", "C", "D", "E", "F"];


const newArray = anArray.slice(2,5);
console.log(newArray);  // > (4) ["C", "D", "E"]

anArray.reverse();  
console.log(anArray);  // > (6) ["F", "E", "D", "C", "B", "A"]

const newString = anArray.join();
console.log(newString);  // > A,B,C,D,E,F

const newerArray = newString.split(",");
console.log(newerArray);  // > (6) ["A", "B", "C", "D", "E", "F"]


// Example: //
// .concat()

const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];

const myArrayC = myArrayA.concat(myArrayB);

console.log(myArrayC);  // > (6) ["A", "B", "C", "D", "E", "F"]


// spread operator (...)

const myArrayD = ["A", "B", "C"];
const myArrayE = ["D", "E", "F"];

const myArrayF = [...myArrayD, ...myArrayE];

console.log(myArrayF);  // > (6) ["A", "B", "C", "D", "E", "F"]
