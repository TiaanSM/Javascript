// Strings //

const myVariable= "Mathematic";

// String Methods //

// charAt()
console.log(myVariable.charAt(6));  // > a

// indexOf()
console.log(myVariable.indexOf("at"));  // > 1
console.log(myVariable.indexOf("ati"));  // > 6

// lastIndexOf()
console.log(myVariable.lastIndexOf("at"));  // > 6
console.log(myVariable.lastIndexOf("ath"));  // > 1

// slice()
console.log(myVariable.slice(5,8));  // > mat
console.log(myVariable.slice(5));  // > matics

// toUpperCase() && toLowerCase()
console.log(myVariable.toUpperCase());  // > MATHEMATICS
console.log(myVariable.toLowerCase());  // > mathematics

// includes()
console.log(myVariable.includes("div"));  // > false
console.log(myVariable.includes("mat"));  // > true

// split()
console.log(myVariable.split("e"));  // > ["Math", "matics"]
console.log(myVariable.split(""));  // > ["M", "a", "t", "h", "e", "m", "a", "t", "i", "c", "s"]
console.log("John,Joe,Dave".split(","));  // > ["John", "Joe", "Dave"]
console.log("Every good boy does fine".split(""));  // > ["Every", "good", "boy", "does", "fine"]

//  The length property
console.log("Every good boy does fine".length);  // > 24

// Check MDN documents for more.