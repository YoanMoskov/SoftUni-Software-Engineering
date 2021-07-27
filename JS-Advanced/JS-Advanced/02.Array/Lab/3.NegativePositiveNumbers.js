function solve(array){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            newArray.unshift(array[i]);
        }
        else {
            newArray.push(array[i]);
        }
    }
    for (let j = 0; j < array.length; j++) {
        console.log(newArray[j]);
    }
}


console.log(solve([3, -2, 0, -1]));