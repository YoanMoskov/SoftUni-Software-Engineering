function solve(matrix){
    let currRow;
    let counter = 0;
    for (let row = 0; row < matrix.length; row++) {
        currRow = matrix[row];
        for (let col = 0; col < currRow.length; col++) {
            let currElement = currRow[col];
            if (col - 1 >= 0) {
                if (currElement === matrix[row][col - 1]) {
                    counter++;
                }
            }
            if (row - 1 >= 0) {
                if (currElement === matrix[row - 1][col]) {
                    counter++;
                }
            }
            if (row + 1 < matrix.length) {
                if (currElement === matrix[row + 1][col]) {
                    counter++;
                }
            }
            if (col + 1 < currRow.length) {
                if (currElement === matrix[row][col + 1]) {
                    counter++;
                }
            }
        }
    }
    console.log(counter/2);
}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '5', '2'],
['9', '8', '7', '5', '4']]);