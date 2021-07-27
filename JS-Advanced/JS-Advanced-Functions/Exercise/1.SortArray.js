function solve(numbers, string) {
    let resultArray = [];
    if (string == 'asc') {
        resultArray = numbers.sort((a, b) => a - b);
    }
    else if (string == 'desc') {
        resultArray = numbers.sort((a, b) => b - a);
    }
    return resultArray;
}
solve([3, 1, 2, 10], 'asc');