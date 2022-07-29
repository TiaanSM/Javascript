// Javascripit Errors and error handeling
"use strict"

const makeError = () => {
    try {
      throw new Error("This is a error!");
    } catch(err) {  // catch() will execute if there is an error, if there is an error the code stop.
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack);
    } finally {  // finally will execute no matter what
        console.log();
    }
}
makeError(); 

// console.log(err);  (normal) > TypeError: ...
// console.error(err);  (red) > TypeError: ...
// console.warn(err);  (yellow) > TypeError: ...
// console.table(err);  (table) > "Error details"


function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
}