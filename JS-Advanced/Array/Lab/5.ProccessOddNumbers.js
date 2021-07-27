function solve(array){
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 != 0) {
            resultArray.unshift(array[i] * 2);
        }
    }
    console.log(resultArray.join(' '));
}
solve([3, 0, 10, 4, 7, 3]);

