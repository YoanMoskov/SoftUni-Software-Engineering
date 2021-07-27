function solve(array) {
    let delimiter = array.pop();
    let resultString = array.join(delimiter);
    console.log(resultString);
}
solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_'])