function solve(array) {
    array.sort(function(a, b) {
        let result = a.length - b.length;
        if (result === 0) {
            let currA = a.toUpperCase();
            let currB = b.toUpperCase();
            if (currA < currB) {
                result = -1;                
            }
            else if (currA > currB){
                result = 1;
            }
            else{
                result = 0;
            }
        }
        return result;
    });
    array.forEach(x => {
        console.log(x);
    });
}
solve(['alpha', 
'beta', 
'gamma']);