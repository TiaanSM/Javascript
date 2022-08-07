// Web strorage API

// Not part of the DOM - refers to the Window API
// Available to JS via the global variable: window

// We do not have to type window. It is implied:

window.alert(window.location);
alert(location);  // same as above

const myArray = ['eat', 'sleep', 'code'];
const myObject = {
    name: "Tiaan",
    hobbies: ["eat", "sleep", "code"],
    logName: function() {
        console.log(this.name);
    }
}


localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);  // > (3) ["eat", "sleep", "code"]

localStorage.removeItem("myLocalStore");  // removes the items stored there
localStorage.clear();  // remove all items
const key = localStorage.key(0);  // > myLocalStore

// storage only stores string data if it is not string data, then it will try to convert it to string data.

// session only saves it while you are on the website, local saves on the client device to use when the client comes back onto the website.

// the code block above can be changed to session, by replacing the local with session.

