function solve(matrix) {
    let specifiers = formatInput(matrix.shift());
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = formatInput(matrix[i]);
    }

    for (let k = 0; k < matrix.length; k++) {
        let currTown = { 
            'Town': matrix[k][0],
            'Latitude': Number(Number(matrix[k][1]).toFixed(2)),
            'Longitude': Number(Number(matrix[k][2]).toFixed(2))
        }
        result.push(currTown);
    }    
    console.log(JSON.stringify(result));
    
    function formatInput(array) {
        let formattedArr = array.split('|').filter(x => x != '').map(x => x.trim());
        return formattedArr;
    }
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);