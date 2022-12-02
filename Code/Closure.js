// Lexical Scope defines how variable names are resolved in nested functions.

// Nested (child) functions have access to the scope of their parent functions.

// This is often confused with closure, but lexical scope is only an important part of closure.

// global scope

let x = 1;

const parentFunction = () => {
    // local scope
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue += 1);
    }

    childFunction();  // 1  2  6  3
}

parentFunction(); // 1  2

// A closure is a function having access to the parent scope, even after the parent function has closed.

// A closure is created when we define a function, not when a function is executed.

const newParentFunction = () => {
    
    let myValue = 2;
    console.log(x);  // 1
    console.log(myValue);  // 2

    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue += 1);
    }

    childFunction();
}

const result = parentFunction();  
console.log(result); // () => { console.log(x += 5); console.log(myValue += 1) }

result();  // 6  3
result();  // 11  4
console.log(myValue);  // reference error, private variable.


// IIFE (Immediately Invoked Function Expression)

const privateCounter = (() => {
    let count = 0;
    console.log(`initial value: ${count}`);  // initial value: 0
    return () => { count += 1; console.log(count) }
})();  // adding the brackets after calls function immediately.

privateCounter();  // 1


const credits = ((num) => {
    let credits = num;
    console.log(`initial credits: ${credits}`);  // initial credits value: 3
    return () => {
        credits -= 1;
        if(credits > 0) console.log(`playing game, ${credits} credits remaining`);
        if(credits <= 0) console.log('not enough credits');
    }
})(3);

credits();  // playing game, 2 credits remaining.
credits();  // playing game, 1 credits remaining.
credits();  // not enough credits.