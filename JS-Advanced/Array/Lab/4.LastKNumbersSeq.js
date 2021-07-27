function solve(n, k) {
    let numberArray = [];
    numberArray.push(1);
    let sum = 0
    for (let i = 0; i < n - 1; i++) {
        for (let j = i - k + 1; j <= i; j++) {
            if (j < 0) {
                
            }
            else{
                sum += Number(numberArray[j]);
            }
        }
        numberArray.push(sum);
        sum = 0;
    }
    console.log(numberArray.join(' '));
}

console.log(solve(6, 3));