// Modules
// Used to export sections of code from one file and import to another.(functions, classes)
// Put this script tag in html when using modules: <script type="module" src="main.js"></script>
"use strict";

import playGuitar from "./guitars";
import { shredding as shred, plucking as fingerpicking} from "./guitars";

console.log(playGuitar());  // > playing guitar
console.log(shred());  // > shredding some licks
console.log(fingerpicking());  // > plucking the strings

/*/ 
import * as Guitars from "./guitars";

 console.log(Guitars.playGuitar());  > playing guitar
 console.log(Guitars.shredding());  > shredding some licks
 console.log(Guitars.plucking());  > plucking the strings

/*/

import User from "./user";

const me = new User("email@gmail.com", "Tiaan");

console.log(me);  // > User {_id: "email@gmail.com", _name: "Tiaan"}
console.log(me.greeting());  // > Hi, my name is Tiaan.


// babel, webpack, parcel