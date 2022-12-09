const birdsPerDay = (arr) => {
    let birdAmount = 0;
    for (let i = 0; i < arr.length; i++) {
        birdAmount += arr[i];
    }
    return birdAmount;
}

console.log(birdsPerDay([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]));


const birdsInWeek = (arr, numberWeek) => {
    const startDay = (numberWeek - 1) * 7;
    const endDay = startDay + 7;

    let weekCount = 0;

    for (let i = startDay; i < endDay; i++) {
        weekCount += arr[i];
    }
    return weekCount;
}
console.log(birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1], 2));


const fixBirdCountLog = (arr) => {

    let newAmount = arr;

    for (let i = 0; i < newAmount.length; i += 2) {
        newAmount[i] += 1;
    }

    return newAmount;
}
console.log(fixBirdCountLog([2, 5, 0, 7, 4, 1]));