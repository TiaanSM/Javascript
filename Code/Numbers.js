// Numbers //

// An integer is a whole number.
const myNumber = 42;

//Anumber with a decimal point is a float which references the "floating point"
const myFloat = 42.0;

const myString = "42";

console.log(myNumber === myFloat);  // > true

console.log(myNumber === myString);  // > false

console.log(myString + 3);  // > 423

console.log(Number(myString));  // > 45

console.log(Number(myString) === myNumber);  // > true

console.log(Number("Tiaan"));  // > NaN

console.log(Number(true));  // > 1
console.log(Number(false));  // > 0  (0 = false in js)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Methods //

const anNumber = 42;
const anFloat = 42.01;
const anString = "42.123abc";

// The Number.isInteger() method determines whether the passed value is an integer.

console.log(Number.isInteger(myString));  // > false


/*/ The Number.parseFloat() method parses an argument and returns a floating point number.
If a number cannot be parsed from the argument, it returns NaN. /*/

console.log(Number.parseFloat(anNumber));  // > 42
console.log(Number.parseFloat(anString));  // > 42.123


// The toFixed() method formats a number according to how many decimal points you provide as the parameter.
// And rounds up.Returns string data not number date.

console.log(Number.parseFloat(anString).toFixed(2));  // > 42.12


// The Number.parseInt() method parses a string argument and returns an integer.

console.log(Number.parseInt(anFloat));  // > 42
console.log(Number.parseInt(anString));  // > 42


// The toString() method returns a string representing the number.

console.log(anFloat.toString());  // > 42.0151

console.log(typeof anFloat.toString());  // > string
console.log(typeof Number.parseFloat(anString));  // > number


// Chaining = Using several methods chained together.


// Nan is an acronym for Not a Number

// The Number.isNaN() method determines whether the passed value is NaN AND its type is Number.
console.log(Number.isNaN("Dave"));  // > false

// The global isNaN() function determines whether a value is NaN or not.
console.log(isNaN("Dave"));  // > true