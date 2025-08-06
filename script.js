const START = "-";
const CROSS = "X";
const CIRCLE = "O";

console.log("test");

let gameBoard = (function createGameBoard() {
    const board = Array(9).fill(START);
    let count = 0;

    let setCross = (i) => {
        board[i] = CROSS;
        ++count;
    }

    let setCircle = (i) => {
        board[i] = CIRCLE;
        ++count;
    }

    let checkOver = function () {
        if (count == 8 || checkRows() ||checkColumns() || checkDiagonals()) return true;
        return false;
    }

    let isEqual = (i, j) => {
        return board[i] !== START && board[j] != START && board[i] === board[j];
    }

    let checkRows = function () {
        if (isEqual(0, 1) && isEqual(1, 2)) return true;
        if (isEqual(3, 4) && isEqual(4, 5)) return true;
        if (isEqual(6, 7) && isEqual(7, 8)) return true;

        return false;
    }

    let checkColumns = function () {
        if (isEqual(0, 3) && isEqual(3, 6)) return true;
        if (isEqual(1, 4) && isEqual(4, 7)) return true;
        if (isEqual(2, 5) && isEqual(5, 8)) return true;

        return false;
    }

    let checkDiagonals = function () {
        if (isEqual(0, 4) && isEqual(4, 8)) return true;
        if (isEqual(2, 4) && isEqual(4, 6)) return true;

        return false;
    }

    let displayBoard = () => {
        console.log(board[0] + " " + board[1] + " " + board[2]);
        console.log(board[3] + " " + board[4] + " " + board[5]);
        console.log(board[6] + " " + board[7] + " " + board[8]);
    }

    return { setCircle, setCross, checkOver, displayBoard };
})();

gameBoard.displayBoard();
gameBoard.setCircle(0);
gameBoard.setCircle(1);
gameBoard.setCircle(2);
gameBoard.displayBoard();
console.log(gameBoard.checkOver());


function createPlayer(name) {
    let getName = () => name;
    return { getName };
}

let gameController = (function () {
    firstPlayerName = prompt("Enter player 1 name: ");
    secondPlayerName = prompt("Enter player 2 name: ");

    playerOne = createPlayer(firstPlayerName);
    playerTwo = createPlayer(secondPlayerName);

    play = () => { console.log(playerOne.getName() + " " + playerTwo.getName()) };

    let display = () => {
        
    }
    return { play };
})();


gameController.play();