// ES6 Classes example of inheritance

class Vehicle {
    constructor() {
        this.wheels = 4,
        this.motorized = true
    }

    ready() {
        return "Ready to go!";
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super();  // call super() to refer to => this.
        this.wheels = 2
    }

    wheelie() {
        return "On one wheel now!"
    }
}

const myBike = new Motorcycle();

console.log(myBike);  // > Motorcycle {wheels: 2, motorized: true}
console.log(myBike.wheels);  // 2
console.log(myBike.ready());  // Ready to go!
console.log(myBike.wheelie());  // On one wheel now!



// Prototypal Inheritance and the Prototype Chain.

// ES6 introduced classes which is the modern way to construct objects.

// That said, prototypal inheritance and the prototype chain are: 
// 1) "under the hood", (ES6 Classes are considered "syntactical sugar")
// 2) often in interview questions,
// 3) and are usefull to understand.

// Object literals
const person = {
    alive: true
}

const musician = {
    plays: true
}

console.log(musician.plays);  // true
console.log(musician.alive);  // undefined

musician.__proto__ = person;

console.log(musician.plays);  // true
console.log(musician.alive);  // true
console.log(musician);  // > {plays: true} > __proto__: Object  alive: true



// JS now has a getPrototypeOf and setPrototypeOf methods instead of using __proto__.

Object.setPrototypeOf(musician, person);

console.log(Object.getPrototypeOf(musician));  // > {alive: true}
console.log(musician.plays);  // true
console.log(musician.alive);  // true

// Extending the prototype chain => general to specific to more specific.
const guitarist = {
    strings: 6,
    __proto__: musician
}

console.log(guitarist.alive);  // true
console.log(guitarist.plays);  // true
console.log(guitarist.strings);  // 6
console.log(guitarist);  // > {strings: 6} > __proto__: plays: true > __proto__: alive: true > __proto__:Object



// No circular references are allowed (person.__proto__ can't be guitarist)
// The __proto__ calue must be an object or null.
// An object can only directly inherit from one object.

// Object with getter and setter methods
const car = {
    doors: 2,
    seats: "vinyl",
    get seatMaterial() {
        return this.seats;
    },
    set seatMaterial(material) {
        this.seats = material;
    }
}

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = "leather";
console.log(luxuryCar);  // > {seats: "leather"}
console.log(luxuryCar.doors);  // 2 
console.log(car);  // > {doors: 2, seats: "vinyl"} 

// Walking up the chain - props and methods are not copied
console.log(luxuryCar.valueOf());  // > {seats: "leather"}


// Getting the keys of an object
console.log(Object.keys(luxuryCar));  // > ["seats"]

// Loop through each object key
Object.keys(luxuryCar).forEach(key => {
    console.log(key);  // seats
});

// But a for..in loop includes inherited props
for (let key in luxuryCar) {
    console.log(key);  // seats  doors  seatMaterial
}



// Object constructors
function Animal(species) {
    this.species = species;
    this.eats = true;
}

Animal.prototype.walks = function () {
    return `A ${this.species} is walking.`;
}

const Bear = new Animal("bear");

console.log(Bear.species);  // bear
console.log(Bear.walks);  // A bear is walking.

// The prototype property is where inheritable props and methods are.
console.log(Bear.__proto__);  // > {walks: f(), constructor: f() }