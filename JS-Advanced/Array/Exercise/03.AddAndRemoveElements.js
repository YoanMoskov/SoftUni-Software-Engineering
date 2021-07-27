function solve(array) {
    let baseNum = 1;
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'add') {
            resultArray.push(baseNum);
            baseNum++;
        }
        else if (array[i] === 'remove'){
            resultArray.pop()
            baseNum++;
        }
    }
    if (resultArray.length > 0) {
        resultArray.forEach(element => {
            console.log(element);
        });        
    }
    else{
        console.log('Empty');
    }
}
solve(['remove', 
'remove', 
'remove'])