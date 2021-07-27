function solve(arrayTowns) {
    let result = {};
    for (let i = 0; i < arrayTowns.length; i++) {
        let currTown = arrayTowns[i].split(' <-> ');
        if (currTown[0] in result) {
            result[currTown[0]] += Number(currTown[1]);
        } else {
            result[currTown[0]] = Number(currTown[1]);   
        }
    }
    for (const key in result) {
        console.log(`${key} : ${result[key]}`);
    }
}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);