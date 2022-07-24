// Functions

// Methods = Built-in Functions!

// Function declaration Syntax:

function sum(num1, num2) {
    if (num2 === undefined) {
        return num1 + num1;
    }
    return num1 + num2;
}
console.log(sum(2, 8));  // > 10


// Example: //
function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("playerOne@randomemail.com"));  // > playerOne


// Example: anonymous function //
const getUserNameFromEmail = function (email) {
    return email.slice(0, email.indexOf("@"));
};


// Example: arrow function //
const getUserNameFromEmail = (email) => {
    return email.slice(0, email.indexOf("@"));
};

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("nOVemBeR"));  // > November