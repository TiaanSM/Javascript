// Strings //

// All string methods return a new string. They don't modify the original string.
// Formally said:
// Strings are immutable: Strings cannot be changed, only replaced.

const myVariable= "Mathematic";

// String Methods //

// charAt(position)
console.log(myVariable.charAt(6));  // > a

// indexOf()
// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string

console.log(myVariable.indexOf("at"));  // > 1
console.log(myVariable.indexOf("ati"));  // > 6

// lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string.
console.log(myVariable.lastIndexOf("at"));  // > 6
console.log(myVariable.lastIndexOf("ath"));  // > 1

// slice(start, end)
console.log(myVariable.slice(5,8));  // > mat
console.log(myVariable.slice(5));  // > matics

// toUpperCase() && toLowerCase()
console.log(myVariable.toUpperCase());  // > MATHEMATICS
console.log(myVariable.toLowerCase());  // > mathematics

// includes(search value, start)
// The includes() method returns true if a string contains a specified value.
console.log(myVariable.includes("div"));  // > false
console.log(myVariable.includes("mat"));  // > true

// split()
// If you want to work with a string as an array, you can convert it to an array.
// If the separator is omitted, the returned array will contain the whole string in index [0].
// If the separator is "", the returned array will be an array of single characters.
console.log(myVariable.split("e"));  // > ["Math", "matics"]
console.log(myVariable.split(""));  // > ["M", "a", "t", "h", "e", "m", "a", "t", "i", "c", "s"]
console.log("John,Joe,Dave".split(","));  // > ["John", "Joe", "Dave"]
console.log("Every good boy does fine".split(""));  // > ["Every", "good", "boy", "does", "fine"]

//  The length property
console.log("Every good boy does fine".length);  // > 24


// substring(start, end)
// The difference is that start and end values less than 0 are treated as 0 in substring().
let str = "Apple, Banana, Kiwi";
document.getElementById("demo").innerHTML = str.substring(7,13);  // > Banana


// substr(start, length)
// The difference is that the second parameter specifies the length of the extracted part.
// If the first parameter is negative, the position counts from the end of the string.
let string = "Apple, Banana, Kiwi";
document.getElementById("demo").innerHTML = string.substr(7,6);  // > Banana


// replace()
// The replace() method replaces a specified value with another value in a string.
// The replace() method replaces only the first match
// By default, the replace() method is case sensitive.
let text = "Welcome to the house."
text.replace("house", "hotel");  // > Welcome to the hotel.


// conact()
let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat("", text2);  // > Hello World!


// trim()
// The trim() method removes whitespace from both sides of a string.
let newText = "       Hello World!        "; 
let trimText = newText.trim();  // > "Hello World"  


// padStart() && padEnd()
// To pad a number, convert the number to a string first
let txt = "5";
let padded = txt.padStart(4, "x");  // > xxx5


// search()
// The search() method searches a string for a specified value and returns the position of the match.
let str1 = "Please locate where 'locate' occurs!";
str1.search("locate");  // > 7

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).


// match()
// The match() method searches a string for a match against a regular expression,
// and returns the matches, as an Array object.
let message = "The rain in Spain stays mainly in the plain";
message.match(/aing/g);  // > ain,ain,ain
// If a regular expression does not include the g modifier (to perform a global search),
// the match() method will return only the first match in the string


// startsWith(search value, length) && endsWith(search value, length)
// The startsWith() method returns true if a string begins with a specified value, otherwise false:
// The endsWith() method returns true if a string ends with a specified value, otherwise false:
let person = "John Doe";
person.startsWith("John");  // > true
person.endsWith("Desert");  // > false