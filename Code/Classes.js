// Javascript Classes
// Class structure / blueprint/template for an object

class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
        this.toppings = [];
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    getToppings() {
        return this.toppings;
    }
    setToppings(topping) {
        this.toppings.push(topping);
    }
    bake() {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
    }
}

const myPizza = new Pizza("pepperoni", "small");

myPizza.setCrust("thin");
myPizza.bake();  // > Baking a small pepperoni thin crust pizza.
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings());  // > (2) ["sausage", "olives"]


// Example //

// Parent class/Super class
class Pizza {
    constructor(pizzaSize) {
        this.size = pizzaSize;
        this.crust = "original";
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
}  

// Child class
class SpecialtyPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize);  // (super calls the constructor of the parent class.)
        this.type = "The Works"
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
    }
}  

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice();  // > Our The Works medium pizza has 8 slices.



// Example: Factory function //

function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
    };
}

const newPizza = pizzaFactory("small");
myPizza.bake();  // > Baking a small original crust pizza.



class Burger {
    crust = "original";  // public field
    #sauce = "traditional";  // private field
    #size;
    constructor(burgerSize) {
        this.#size = burgerSize;
    }
    getCrust() {
        return this.crust;
    }
    setCrust(burgerCrust) {
        this.crust = burgerCrust;
    }
    hereYouGo() {
        console.log(`Heres your ${this.crust} ${this.#sauce} sauce ${this.#size} burger.`)
    }
}  
const myBurger = new Burger("large");
myBurger.hereYouGo();  // > Heres your original traditional sauce large burger.
console.log(myBurger.getCrust());  // > original
console.log(myBurger.sauce);  // > undefined

// caniuse.com // shows what is useable across browsers.