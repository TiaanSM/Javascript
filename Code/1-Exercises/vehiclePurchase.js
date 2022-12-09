const needsLicense = (string) => {
    if (string === 'car') {
        return true; 
    } else if (string === 'truck'){
        return true;
    } else {
        return false;
    } 
}
console.log(needsLicense('car'));
console.log(needsLicense('bike'));


const chooseVehicle = (carOne, carTwo) => {
    return carOne.toLowerCase() < carTwo.toLowerCase() ?
    `${carOne} is clearly the better choice`
    :
    `${carTwo} is clearly the better choice`
}
console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'));
console.log(chooseVehicle('Volkswagen Golf','Volkswagen Beetle'));


const calculateResellPrice = (originalPrice, age) => {
    if (age <= 3) {
        return originalPrice * 8 / 10;
    } else if (age > 3 && age <= 10) {
        return originalPrice * 7 / 10;
    } else if (age > 10) {
        return originalPrice * 5 / 10;
    }
}
console.log(calculateResellPrice(1000, 1));
console.log(calculateResellPrice(1000, 5));
console.log(calculateResellPrice(1000, 15));