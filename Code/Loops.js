// Loops //
// Dont create endless loops always remember to put a stop.

// while loop: //
let myNumber = 0;
while (myNumber < 50) {
    console.log(myNumber);
    myNumber++;
}

// Example: //
let name = "Tiaan";
let counter = 0;
let myLetter;
while (counter <= 3) {
    myLetter = name[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter += 2;
        continue;
    }
    if (myLetter === "a") break;
    counter++;
}


// do while loop: //
do {
    console.log(muNumber);
} while (myNumber < 50);


// for loop: //
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
