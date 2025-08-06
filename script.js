console.log("test");

let gameboard = (function createGameBoard() {
    let board = [];
    return {board};
}) ();

console.log(gameboard.board);


function createPlayer(name) {
    getName = () => name;
    return {getName};
}

const user = createPlayer("test-player");

console.log(user.getName());

let gameController = (function() {
    firstPlayerName =  prompt("Enter player 1 name: ");
    secondPlayerName =  prompt("Enter player 2 name: ");
    play = () => {console.log(firstPlayerName + " " + secondPlayerName)};
    return {play};
}) ();


gameController.play();