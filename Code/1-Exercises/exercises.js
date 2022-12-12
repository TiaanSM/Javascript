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



// High Score Board // 
let scoreBoard = {}

const createScoreBoard = (player, score) => {
    return scoreBoard = { player, score };
}
createScoreBoard("The best ever", 1000);


const addPlayer = (scoreBoard, Player, Score) => {
    let newPlayer = { Player, Score}
    Object.assign(scoreBoard, newPlayer);
}
addPlayer(scoreBoard, 'Tiaan', 200);
addPlayer(scoreBoard, 'Mans', 900);

console.log(scoreBoard);