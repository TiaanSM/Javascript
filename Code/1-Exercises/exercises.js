const twoFer = (name = 'you') => {
    return `One for ${name}, one for me.`
}
//console.log(twoFer('Tiaan'));



const colorList = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

const bandColorList = () => {
    colorList.forEach(color => {
        console.log(color);
    });
}
//bandColorList();

const getValue = (color) => {
    return colorList.indexOf(color);
}
//console.log(getValue('white'));



for (let i = 0; i < 11; i++) {
    //console.log(i);
}

let number = 0;
while (number < 10) {
    number++;
    //console.log(number);
}

for (let i = 10; i > 0; i--) {
    //console.log(i);
}

const array = ['hey', 'hello', 'sup', 'oi', 'heyo', 'whoah'];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}


const numbers = [1, 2 ,3 ,4, 5, 6, 7, 8, 9,];

const sum = numbers.reduce((number, a) => number + a, 0);

console.log(sum);