// Conditionals: If Statements //

// Syntax

if (condition) {
    // run some code
} else {
    // run dome different code
}


// Example: //

let testScore = 89;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else if (testScore >= 60) {
    grade = "D";
} else {
    // nested if statement
    if (collegeStudent) {
        grade = "U";
    } else {
        grade = "F";
    }
}



// Conditionals: Switch Statements //

// Syntax

switch (expression) {  // (expression OR value)

    case choice1:
        // run this code 
        break;
    
    case choise2:
        // run this different code
        break;

     // add as many cases as needed

    default:
     // run this code if no case matches
     // no need for a break here
}  

// Example: //

switch ("2") {  // >  No match  (strict matches) 

    case 1:
        console.log(1);
        break;
    
    case 2:
        console.log(2);
        break;

    case 3:
        console.log(3);

    default:
    console.log("No match");
}  
// ("2") doesnt match, but (2) does match



// Conditionals: Ternary Operator //

// Syntax

// condition ? ifTrue : ifFalse;

let soap = "Dove soap";
let response = soap ? "Yes, we have soap." : "Sorry, no soap today.";
console.log(response);  // > Yes, we have soap.

// Example: //

let soup = "Chicken Noodle Soup";
let isCustomerBanned = true;  // > if false then > Yes, we have Chicken Noodle Soup today.
let soupAccess = isCustomerBanned 
? "Sorry, no soup for you" 
: soup
? `Yes, we have ${soup} today.`
: "Sorry, no soup today."
console.log(soupAccess);  // > Sorry, no soup for you

// Example: //

let TestScore = 88;  // > outcome based on score

let myGrade = 
    TestScore > 89
      ? "A"
      : TestScore > 79
      ? "B"
      : TestScore > 69
      ? "C"
      : TestScore > 59
      ? "D"
      : "F";
console.log(`My test grade is a ${myGrade}.`);  // > My test grade is a B