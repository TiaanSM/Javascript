const remainingMinutesInOven = (actualMinutesInOven) => {
    const EXPECTED_MINUTES_IN_OVEN = 40;
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}
console.log(remainingMinutesInOven(5));



const preparationTimeInMinutes = (lasagnaLayers) => {
    const layerPrep = 2;
    return layerPrep * lasagnaLayers;
}
console.log(preparationTimeInMinutes(4));



const totalTimeInMinutes = (numberOfLayers, actualMinutesInOven) => {
    return numberOfLayers * 2 + actualMinutesInOven;
}
console.log(totalTimeInMinutes(3, 20));