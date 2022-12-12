const dayRate = (rate) => {
    return rate * 8;
}
console.log(dayRate(60));


const daysInBudget = (budget, dayRates) => {
    let rate = dayRates * 8;
    return Math.round(budget / rate);
}
console.log(daysInBudget(10000, 70));