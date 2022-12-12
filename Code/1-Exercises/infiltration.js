const knightIsAwake = true;

const canExecuteFastAttack = () => knightIsAwake === true ? false : true;
console.log(canExecuteFastAttack(knightIsAwake));

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