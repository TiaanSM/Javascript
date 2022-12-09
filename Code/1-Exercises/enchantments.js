const getItem = (arr, position) => {
    return arr[position];
}
console.log(getItem([1, 2, 3, 4, 1], 2));


const setItem = (arr, position, replacementCard) => {
    arr[position] = replacementCard;
    return arr; 
}
console.log(setItem([1,2,4,1], 1, 6));


const insertItemAtTop = (arr, newCard) => {
    let newArr = arr.concat(newCard);
    return newArr;
}
console.log(insertItemAtTop([5,9,7,1], 8));


const removeItem = (arr, position) => {
    arr.splice(position, 1);
    return arr;
}
console.log(removeItem([3, 2, 6, 4, 8], 2));


const removeItemFromTop = (arr) => {
    arr.pop();
    return arr;
}
console.log(removeItemFromTop([3, 2, 6, 4, 8]));


const insertItemAtBottom = (arr, newCard) => {
    arr.unshift(newCard);
    return arr;
}
console.log(insertItemAtBottom([5, 9, 7, 1], 4));


const removeItemAtBottom = (arr) => {
    arr.shift();
    return arr;
}
console.log(removeItemAtBottom([8, 5, 9, 7, 1]));


const checkSizeOfStack = (arr, stackSize) => {
    return arr.length === stackSize ? true : false;
}
console.log(checkSizeOfStack([3, 2, 6, 4, 8], 4));