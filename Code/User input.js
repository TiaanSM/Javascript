// User Input //

alert("Hello World!");  // > popup on screen showing Hello World!

confirm("Ok === True\nCancel === False");  // > popup on screen with an Ok and Cancel button.(returns boolean)

prompt("Please enter your name.")  // > popup on screen with input field and ok, cancel buttons.

// Example: //

let name = prompt("Please enter your name.");
if (name) { 
    console.log(name.length);  // > logs name length
    console.log(name.trim().length);  // > trim white space
    console.log(name.trim());  // > logs name
} else {
    console.log("You didnt enter your name.");
}
