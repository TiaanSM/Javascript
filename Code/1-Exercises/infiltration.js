/*

1. Check if the 'Fast Attack' action is possible
Implement a function named canExecuteFastAttack that takes a boolean
value which indicates if the knight is awake. This function returns true if the 'Fast Attack'
action is available based on the state of the character. Otherwise, returns false:

const knightIsAwake = true;
canExecuteFastAttack(knightIsAwake);
// => false

*/
const knightIsAwake = true;

const canExecuteFastAttack = () => knightIsAwake === true ? false : true;
console.log(canExecuteFastAttack(knightIsAwake));
/*  

2. Check if the 'Spy' action is possible
Implement a function named canSpy that takes three boolean values, 
indicating if the knight, archer and the prisoner, respectively, are awake. 
The function returns true if the 'Spy'action is available based on the state
of the characters. Otherwise, returns false:

const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;
canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake);
// => true

*/
const knightAwake = false;
const archerAwake = true;
const prisonerAwake = false;

const canSpy = (knightAwake, archerAwake, prisonerAwake) => {
    if (knightAwake || archerAwake || prisonerAwake) {
        return true;
    } else {
        return false;
    }
}
console.log(canSpy(knightAwake, archerAwake, prisonerAwake));
/*

3. Check if the 'Signal Prisoner' action is possible
Implement a function named canSignalPrisoner that takes two boolean values,
indicating if the archer and the prisoner, respectively, are awake. 
The function returns true if the 'Signal Prisoner'
action is available based on the state of the characters. Otherwise, returns false:

const archerIsAwake = false;
const prisonerIsAwake = true;
canSignalPrisoner(archerIsAwake, prisonerIsAwake);
// => true

*/
const archerIsAwake = false;
const prisonerIsAwake = true;

const canSignalPrisoner = (archerIsAwake, prisonerIsAwake) => {
    if (archerIsAwake === false && prisonerIsAwake === true) {
        return true;
    } else {
        return false;
    }
}
console.log(canSignalPrisoner(archerIsAwake, prisonerIsAwake));
/*
4. Check if the 'Free Prisoner' action is possible
Implement a function named canFreePrisoner that takes four boolean values.
The first three parameters indicate if the knight, archer and the prisoner, respectively, are awake.
The last parameter indicates if Annalyn's pet dog is present. 
The function returns true if the 'Free Prisoner' action is available based on the state of the
characters and Annalyn's pet dog presence. Otherwise, it returns false:

const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;
const petDogIsPresent = false;
canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent);
// => false

*/
const knightISAwake = true;
const archerISAwake = false;
const prisonerISAwake = true;
const petDogISPresent = false;

const canFreePrisoner = (knightISAwake, archerISAwake, prisonerISAwake, petDogISPresent) => {
    if (knightISAwake === false && archerISAwake === false && prisonerISAwake === true) {
        return true;
    } else if (petDogISPresent === true && archerISAwake === false) {
        return true;
    } else {
        return false;
    }  
}
console.log(canFreePrisoner(knightISAwake, archerISAwake, prisonerISAwake, petDogISPresent));