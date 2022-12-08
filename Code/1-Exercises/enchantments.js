const getItem = (arr, position) => {
    return arr[position];
}
console.log(getItem([1, 2, 3, 4, 1], 2));


const setItem = (arr, position, replacementCard) => {
    arr[position] = replacementCard;
    return arr; 
}
console.log(setItem([1,2,4,1], 1, 6));