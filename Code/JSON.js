// JSON: Javascript Object Notation

/*/
JSON is used to send and receive data.
JSON is a text format that is completely language independent.
Meaning JSON is used to send and receive data in many languages, not just in Javascript.
/*/

const myObj = {
    name: "Tiaan",
    hobbies: ["eat", "sleep", "code"],
    hello: function () {
        console.log("Hello!");
    }
};

console.log(myObj);  // > {name: "Tiaan", hobbies: Array(3), hello: f}
console.log(myObj.name);  // > Tiaan
myObj.hello();  // > Hello!
console.log(typeof myObj);  // > object

const sendJSON = JSON.stringify(myObj);  // > {"name":"Tiaan", "hobbies": ["eat","sleep","code"]}  (removes function)

console.log(typeof sendJSON);  // > string
console.log(sendJSON.name);  // > undefined


const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);  // > {name: "Tiaan", hobbies: Array(3)}
console.log(typeof receiveJSON);  // > object