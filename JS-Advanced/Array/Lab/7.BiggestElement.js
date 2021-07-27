function solve(matrix){
    let biggestNum = Number.MIN_SAFE_INTEGER;
    matrix.forEach(row => {
        let currentMax = Number.MIN_SAFE_INTEGER;
        row.forEach(num => {
            if(currentMax < num){
                currentMax = num;
            }
            if(biggestNum < currentMax){
                biggestNum = currentMax;
            }
        });
    });
    console.log(biggestNum);
}
solve([[20, 50, 10],
    [8, 33, 145]])