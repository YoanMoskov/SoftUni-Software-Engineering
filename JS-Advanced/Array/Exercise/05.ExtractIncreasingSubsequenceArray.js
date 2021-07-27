function solve(array) {
    let currentBiggestNum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= currentBiggestNum) {
            currentBiggestNum = array[i];
            console.log(array[i]);
        }
    }
}
solve([20, 
    3, 
    2, 
    15,
    6, 
    1]);