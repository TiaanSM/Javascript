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
console.log(limesToCut(32, ['small', 'small', 'large', 'medium', 'small']));


const twoSum = (arr1, arr2) => {
    return Number(arr1.join('')) + Number(arr2.join(''));
}

console.log(twoSum([1, 2, 3], [0, 7]));