const frontDoorResponse = (string) => {
    return string.slice(0,1);
}
console.log(frontDoorResponse('Hello'));


const frontDoorPassword = (string) => {
    return string.slice(0, 1).toUpperCase() + string.slice(1, string.length).toLowerCase();
}
console.log(frontDoorPassword('exPloSioN'));


const backDoorResponse = (string) => {
    return string.trim().slice(string.length - 1, string.length);
}
console.log(backDoorResponse('daily motivation guysz'));


const backDoorPassword = (string) => {
    return string.slice(0,1).toUpperCase() + string.slice(1, string.length).toLowerCase() + ', please';
}
console.log(backDoorPassword('graveyard'));