function solve(matrix){
    let sumDiagonal = 0;
    let sumCDiagonal = 0;
    let counter = 0;
    let cCounter;

    let resultArray = [];

    for (let row = 0; row < matrix[0].length; row++) {
        let currRow = matrix[row];
        cCounter = currRow.length - row - 1;
        sumDiagonal += Number(currRow[counter]);
        sumCDiagonal += Number(currRow[cCounter]);
        counter++;
    }
    resultArray.push(sumDiagonal);
    resultArray.push(sumCDiagonal);
    console.log(resultArray.join(' '));
}

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);