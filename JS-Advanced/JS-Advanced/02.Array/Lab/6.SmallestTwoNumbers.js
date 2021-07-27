function solve(array){
    let resultArray = [];
    let smallestElement = Number.MAX_SAFE_INTEGER;
    let sortedArray = array.sort(sortByValue); 
    resultArray.push(sortedArray[0]);
    resultArray.push(sortedArray[1]);
    console.log(resultArray.join(' '));
    function sortByValue(a, b){
        return a - b;
    }
}
solve([3, 0, 10, 4, 7, 3])