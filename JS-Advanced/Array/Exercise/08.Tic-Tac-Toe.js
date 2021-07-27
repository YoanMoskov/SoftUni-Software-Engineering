function solve(array) {
    let initialMatrix = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let currCoordinates;
    let counter = 0;
    let isWon = false;
    for (let i = 0; i < array.length; i++) {
        currCoordinates = array[i].split(' ');
        let row = Number(currCoordinates[0]);
        let col = Number(currCoordinates[1]);
        let currPlayer;
        if (initialMatrix[row][col] === false) {
            if (counter % 2 == 0) {
                initialMatrix[row][col] = 'X';
                currPlayer = 'X';
            }
            else{
                initialMatrix[row][col] = 'O'
                currPlayer = 'O';
            }
            if (checkIfWonByRow(initialMatrix) || checkIfWonByCol(initialMatrix) || checkIfWonByDiagonals(initialMatrix)) {
                console.log(`Player ${currPlayer} wins!`);
                isWon = true;
                printMatrix(initialMatrix);
                break;
            }
            else if (checkIfMatrixIsFull(initialMatrix)) {
                console.log('The game ended! Nobody wins :(');
                printMatrix(initialMatrix);
                break;
            }
        }
        else {
            console.log('This place is already taken. Please choose another!');
            counter--;
        }
        counter++;
    }
    function checkIfWonByRow(initialMatrix){
        let isWon = false;
        for (let row = 0; row < initialMatrix.length; row++) {
            let currRow = initialMatrix[row];
            if (currRow[0] != false && currRow.every(v => v === currRow[0])) {
                isWon = true;
            }
        }
        return isWon;
    }
    function checkIfWonByCol(initialMatrix) {
        let isWon = false;
        for (let col = 0; col < 3; col++) {
            let currCol = [];
            currCol.push(initialMatrix[0][col])
            currCol.push(initialMatrix[1][col])
            currCol.push(initialMatrix[2][col])
            if (currCol[0] != false && currCol.every(v => v === currCol[0])) {
                isWon = true;
            }
        }
        return isWon;
    }
    function checkIfWonByDiagonals(initialMatrix){
        let isWon = false;
        let currFirstDiagonal = [];
        currFirstDiagonal.push(initialMatrix[0][0])
        currFirstDiagonal.push(initialMatrix[1][1])
        currFirstDiagonal.push(initialMatrix[2][2])
        let currCounterDiagonal = [];
        currCounterDiagonal.push(initialMatrix[initialMatrix.length - 1][initialMatrix.length - 1])
        currCounterDiagonal.push(initialMatrix[initialMatrix.length - 2][initialMatrix.length - 2])
        currCounterDiagonal.push(initialMatrix[initialMatrix.length - 3][initialMatrix.length - 3])

        if (currFirstDiagonal[0] != false && currFirstDiagonal.every(v => v === currFirstDiagonal[0])) {
            isWon = true;
        } 
        if (currCounterDiagonal[0] != false && currCounterDiagonal.every(v => v === currCounterDiagonal[0])) {
            isWon = true;
        }
        return isWon;
    }
    function checkIfMatrixIsFull(initialMatrix){
        let isFull = true;
        for (let row = 0; row < 3; row++) {
            let currRow = initialMatrix[row];
            for (let col = 0; col < 3; col++) {
                let currEl = currRow[col];
                if (currEl === false) {
                    isFull = false;
                    break;
                }
            }
        }
        return isFull;
    }
    function printMatrix(initialMatrix){
        initialMatrix.forEach(element => {
            console.log(element.join('\t'));
        });
    }
}
solve(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]);