const START = "-";
const CROSS = "X";
const CIRCLE = "O";

console.log("test");

let gameBoard = (function createGameBoard() {
    const board = Array(9).fill(START);
    let count = 0;

    let getCount = () => count;

    let clear = () => {
        board.fill(START);
    }

    let setCross = (i) => {
        board[i] = CROSS;
        ++count;
    }

    let setCircle = (i) => {
        board[i] = CIRCLE;
        ++count;
    }

    let checkOver = function () {
        if (count == 9 || checkRows() || checkColumns() || checkDiagonals()) return true;
        return false;
    }

    let checkWin = function () {
        if (checkRows() || checkColumns() || checkDiagonals()) return true;
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
        console.log("");
        console.log(board[0] + " " + board[1] + " " + board[2]);
        console.log(board[3] + " " + board[4] + " " + board[5]);
        console.log(board[6] + " " + board[7] + " " + board[8]);
    }

    let isValid = (i) => {
        return i < 9 && i >= 0 && board[i] == START;
    }

    return { clear, setCircle, setCross, displayBoard, isValid, getCount, checkWin };
})();

function createPlayer(name) {
    let getName = () => name;

    let getChoice = () => {
        return prompt(name + ", Enter position (0-9, unfilled only):");
    }

    return { getName, getChoice };
}

let gameController = (function () {

    let playerOne;
    let playerTwo;

    let intializePlayers = () => {
        firstPlayerName = prompt("Enter player 1 name: ");
        if (firstPlayerName === "") {
            console.log("Game exited");
            return false;
        }
        secondPlayerName = prompt("Enter player 2 name: ");
        if (secondPlayerName === "") {
            console.log("Game exited");
            return false;
        }

        playerOne = createPlayer(firstPlayerName);
        playerTwo = createPlayer(secondPlayerName);
        return true;

    }

    let play = () => {
        if(!intializePlayers()) return;
        gameBoard.displayBoard();
        while (true) {
            let playerOneChoice = playerOne.getChoice();
            if (playerOneChoice === "") {
                console.log("Game exited");
                return;
            }
            while (!gameBoard.isValid(playerOneChoice)) {
                console.log("Invalid position, try again");
                playerOneChoice = playerOne.getChoice();
                if (playerOneChoice === "") {
                    console.log("Game exited");
                    return;
                }
            }

            gameBoard.setCircle(playerOneChoice);
            gameBoard.displayBoard();

            if (gameBoard.checkWin()) {
                console.log(playerOne.getName() + " wins");
                return;
            }
            else if (gameBoard.getCount() == 9) {
                console.log("Match ends in a draw");
                return;
            }

            let playerTwoChoice = playerTwo.getChoice();
            if (playerTwoChoice === "") {
                console.log("Game exited");
                return;
            }
            while (!gameBoard.isValid(playerTwoChoice)) {
                console.log("Invalid position, try again");
                playerTwoChoice = playerTwo.getChoice();
                if (playerTwoChoice === "") {
                    console.log("Game exited");
                    return;
                }
            }
            gameBoard.setCross(playerTwoChoice);
            gameBoard.displayBoard();

            if (gameBoard.checkWin()) {
                console.log(playerTwo.getName() + " wins");
                return;
            }
        }
    };



    return { play };
})();


gameController.play();