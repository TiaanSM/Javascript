// Objects
// key-value pairs in curly braces

const myObj = { name: "Tiaan"};

const anotherObj = {
    alive: true,
    awnser: 42,
    hobbies: ["eat", "sleep", "code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function() {
        return `Time for ${this.beverage.morning}`;
    }
};

console.log(anotherObj["alive"]);  // > true

console.log(anotherObj.awnser);  // > 42

console.log(hobbies[0]);  // > Eat

console.log(anotherObj.beverage.morning);  // > Coffee

console.log(anotherObj.action());  // > Time for Coffee


// Example: //

const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrooom!";
    }
}

const truck = Object.create(vehicle);
truck.doors = 2;

console.log(truck);  // > {doors: 2}

// Inheritance
console.log(truck.wheels);  // > 4
console.log(truck.engine());  // > Vrooom!


const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() { return "whoosh!"};

console.log(car.engine());  // > whoosh!
console.log(car.wheels);  // > 4


const tesla = Object.create(car);
console.log(tesla.wheels);  // > 4

tesla.engine = function() { return "shhh..."};
console.log(tesla.engine());  // > shhh...


const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

console.log(Object.keys(band));  // > (4) ["vocals", "guitar", "bass", "drums"]
console.log(Object.values(band));  // > (4) ["Robert Plant", "Jimmy Page", "John Paul Jones", "John Bonham"]

for (let job in band) {
    console.log(`On ${job}, its ${band[job]}!`);
}
// > On vocals, its Robert Plant! 
// > On guitar, ...(continues for the rest of the band displaying the job and the person on it, on seperate lines)

delete band.drums  // removes it
band.drums = "John Bonham"  // adds it


// destructuring objects //

const { vocals, guitar, bass, drums } = band;

console.log(guitar);  // > Jimmy Page
console.log(vocals);  // > Robert Plant

function sings({ vocals }) {return `${vocals} sings!`};

console.log(sings(band));  // > Robert Plant sings!