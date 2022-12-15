// Lucians lasagna //

const remainingMinutesInOven = (actualMinutesInOven) => {
    const EXPECTED_MINUTES_IN_OVEN = 40;
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}
//console.log(remainingMinutesInOven(5));


const preparationTimeInMinutes = (lasagnaLayers) => {
    const layerPrep = 2;
    return layerPrep * lasagnaLayers;
}
//console.log(preparationTimeInMinutes(4));


const totalTimeInMinutes = (numberOfLayers, actualMinutesInOven) => {
    return numberOfLayers * 2 + actualMinutesInOven;
}
//console.log(totalTimeInMinutes(3, 20));



// Anna infiltration // 

const knightIsAwake = true;

const canExecuteFastAttack = () => knightIsAwake === true ? false : true;
//console.log(canExecuteFastAttack(knightIsAwake));

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
//console.log(canSpy(knightAwake, archerAwake, prisonerAwake));


const archerIsAwake = false;
const prisonerIsAwake = true;

const canSignalPrisoner = (archerIsAwake, prisonerIsAwake) => {
    if (archerIsAwake === false && prisonerIsAwake === true) {
        return true;
    } else {
        return false;
    }
}
//console.log(canSignalPrisoner(archerIsAwake, prisonerIsAwake));


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
//console.log(canFreePrisoner(knightISAwake, archerISAwake, prisonerISAwake, petDogISPresent));



// Freelancer rates //

const dayRate = (rate) => {
    return rate * 8;
}
//console.log(dayRate(60));


const daysInBudget = (budget, dayRates) => {
    let rate = dayRates * 8;
    return Math.round(budget / rate);
}
//console.log(daysInBudget(10000, 70));



// Poetry club // 

const frontDoorResponse = (string) => {
    return string.slice(0,1);
}
//console.log(frontDoorResponse('Hello'));


const frontDoorPassword = (string) => {
    return string.slice(0, 1).toUpperCase() + string.slice(1, string.length).toLowerCase();
}
//console.log(frontDoorPassword('exPloSioN'));


const backDoorResponse = (string) => {
    return string.trim().slice(string.length - 1, string.length);
}
//console.log(backDoorResponse('daily motivation guysz'));


const backDoorPassword = (string) => {
    return string.slice(0,1).toUpperCase() + string.slice(1, string.length).toLowerCase() + ', please';
}
//console.log(backDoorPassword('graveyard'));



// Elyses enchantments // 

const getItem = (arr, position) => {
    return arr[position];
}
//console.log(getItem([1, 2, 3, 4, 1], 2));


const setItem = (arr, position, replacementCard) => {
    arr[position] = replacementCard;
    return arr; 
}
//console.log(setItem([1,2,4,1], 1, 6));


const insertItemAtTop = (arr, newCard) => {
    let newArr = arr.concat(newCard);
    return newArr;
}
//console.log(insertItemAtTop([5,9,7,1], 8));


const removeItem = (arr, position) => {
    arr.splice(position, 1);
    return arr;
}
//console.log(removeItem([3, 2, 6, 4, 8], 2));


const removeItemFromTop = (arr) => {
    arr.pop();
    return arr;
}
//console.log(removeItemFromTop([3, 2, 6, 4, 8]));


const insertItemAtBottom = (arr, newCard) => {
    arr.unshift(newCard);
    return arr;
}
//console.log(insertItemAtBottom([5, 9, 7, 1], 4));


const removeItemAtBottom = (arr) => {
    arr.shift();
    return arr;
}
//console.log(removeItemAtBottom([8, 5, 9, 7, 1]));


const checkSizeOfStack = (arr, stackSize) => {
    return arr.length === stackSize ? true : false;
}
//console.log(checkSizeOfStack([3, 2, 6, 4, 8], 4));



// Vehicle purchase //

const needsLicense = (string) => {
    if (string === 'car') {
        return true; 
    } else if (string === 'truck'){
        return true;
    } else {
        return false;
    } 
}
//console.log(needsLicense('car'));
//console.log(needsLicense('bike'));


const chooseVehicle = (carOne, carTwo) => {
    return carOne.toLowerCase() < carTwo.toLowerCase() ?
    `${carOne} is clearly the better choice`
    :
    `${carTwo} is clearly the better choice`
}
//console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'));
//console.log(chooseVehicle('Volkswagen Golf','Volkswagen Beetle'));


const calculateResellPrice = (originalPrice, age) => {
    if (age <= 3) {
        return originalPrice * 8 / 10;
    } else if (age > 3 && age <= 10) {
        return originalPrice * 7 / 10;
    } else if (age > 10) {
        return originalPrice * 5 / 10;
    }
}
//console.log(calculateResellPrice(1000, 1));
//console.log(calculateResellPrice(1000, 5));
//console.log(calculateResellPrice(1000, 15));



// Bird watcher //

const birdsPerDay = (arr) => {
    let birdAmount = 0;
    for (let i = 0; i < arr.length; i++) {
        birdAmount += arr[i];
    }
    return birdAmount;
}

//console.log(birdsPerDay([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]));


const birdsInWeek = (arr, numberWeek) => {
    const startDay = (numberWeek - 1) * 7;
    const endDay = startDay + 7;

    let weekCount = 0;

    for (let i = startDay; i < endDay; i++) {
        weekCount += arr[i];
    }
    return weekCount;
}
//console.log(birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1], 2));


const fixBirdCountLog = (arr) => {

    let newAmount = arr;

    for (let i = 0; i < newAmount.length; i += 2) {
        newAmount[i] += 1;
    }

    return newAmount;
}
//console.log(fixBirdCountLog([2, 5, 0, 7, 4, 1]));



// Mixed juices //

const timeToMixJuice = (string) => {
    let drink = string;
    let time;

    switch (drink) {
        case 'Pure Strawberry Joy':
            time = '0.5 min';
            break;
    
        
        case 'Energize':
            time = '1.5 min';
            break;

        case 'Green Garden':
            time = '1.5 min;'
            break;

        case 'Tropical Island':
            time = '3 min';
            break;

        case 'All or Nothing':
            time = '5 min';
            break;

        default:
            time = '2.5 min';  
    }    

    return time;
}
//console.log(timeToMixJuice('All or Nothing'));


const wedges = {
    'small': 6,
    'medium': 8,
    'large': 10
}

const limesToCut = (wedgesNeeded, arr) => {

    const wedges = {
        'small': 6,
        'medium': 8,
        'large': 10
    }
    let wedgesCut = 0;
    let i = 0;

    while (wedgesCut < wedgesNeeded) {
        if (arr[i]) {
            wedgesCut += wedges[arr[i]];
            i++;
        } else {
            return i;
        }
    }
    return i;
}
//console.log(limesToCut(32, ['small', 'small', 'large', 'medium', 'small']));



// Lucky numbers //

const twoSum = (arr1, arr2) => {
    return Number(arr1.join('')) + Number(arr2.join(''));
}

//console.log(twoSum([1, 2, 3], [0, 7]));


const luckyNumbers = (number) => {
    return String(number) === [...String(number)].reverse().join('');
}
//console.log(luckyNumbers(3443443));


const errorMessage = (input) => {
    if (!input) {
        return 'Required field';

    } else if (!Number(input) || Number(input) === 0) {
        return 'Must be a number besides 0';
    } else {
        return '';
    }
}
//console.log(errorMessage('34'));