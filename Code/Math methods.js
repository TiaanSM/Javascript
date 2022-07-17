// Math methods and Properties

console.log(Math.PI);  // > 3.14

// .trunc()  // (returns a number without the decimal)
console.log(Math.trunc(Math.PI));  // > 3

// .round() //  (returns the number rounded up or down based on decimal)

console.log(Math.round(Math.PI));  // > 3
console.log(Math.round(3.5));  // > 4

// .floor() .ceil() //  (returns the number round down or rounded up)

console.log(Math.ceil(Math.PI));  // > 4
console.log(Math.floor(Math.PI));   // > 3


// .pow()  //  (to the power of)
console.log(Math.pow(2, 4));  // > 16


// .min() .max() //  (returns the lowest number, highest number from the list)

console.log(Math.min(2, 9, 0.4, 3.05));  // > 0.4
console.log(Math.max(2, 9, 0.4, 3.05));  // > 9


// .random() //  (Returns a value between 0 and 1)

console.log(Math.random());  // > 0.877798... 

console.log(Math.floor(Math.random() * 10) + 1);  // >  random number from 1 to 10 
//  (use floor instead of ceil with random number)