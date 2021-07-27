function solve(matrix) {
    let sumToMatch = matrix[0].reduce(sumRow);
    
    let isMagical = true;
    for (let i = 1; i < matrix.length; i++) {
        let currSum = matrix[i].reduce(sumRow);
        if (currSum != sumToMatch) {
            isMagical = false;
            break;
        }
    }
    isMagical = sumColEqual(matrix, sumToMatch);
    console.log(isMagical);

    function sumRow(a, b) {
        return a + b;
    }
    function sumColEqual(matrix, sumToMatch) {
        let colSum = 0;
        let isMagical = true;
        for (let col = 0; col < matrix.length; col++) {
            for (let row = 0; row < matrix.length; row++) {
                colSum += matrix[row][col]
            }
            if (colSum === sumToMatch) {
                colSum = 0;
            }
            else{
                isMagical = false;
                break;
            }
        }
        return isMagical;
    }
}

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);