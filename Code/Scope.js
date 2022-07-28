// var, let and const

// global scope
var x = 1;
let y = 2;
const z = 3;

console.log(y); // > Error (when the y at global scope is commented out, it gives an error)
// global scope is available to all, can be used in code blocks and functions etc...

// local scope: block scope

{
    let y = 4;  
    console.log(y);  // > 4 (no Error the y has a value assigned)
}
// can also be put inside myFunc which will then return 5 and 4


// local scope: function scope

function myFunc() {  
    const z = 5;
}

myFunc();  // > 5


// global scope : Example //

var a = 1;  // function scoped (if it was to be in the block scope then the function will pull its value from the block instead of the global, which is why var is considered legacy code.)
let b = 2;
const c = 3;

console.log(`global: ${a}`);  // > global: 1
console.log(`global: ${b}`);  // > global: 2
console.log(`global: ${c}`);  // > global: 3

function myFunc() {
    console.log(`function: ${a}`);  // > function: 1
    console.log(`function: ${b}`);  // > function: 2
    console.log(`function: ${c}`);  // > function: 3

    {
        console.log(`block: ${a}`);  // > block: 1
        console.log(`block: ${b}`);  // > block: 2
        console.log(`block: ${c}`);  // > block: 3
    }
}  // (block pulls its value from parent => function pulls its value from parent => global)

myFunc();

// global = Not in a function or block. Not desirable
// local = In a function or block. Not global
// var instantiates function() scoped variables.
// let and const instantiate {block} scoped variables.