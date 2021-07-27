function solve(...args) {
    let tally = {};
    args.map(x => {
        console.log(`${typeof x}: ${x}`);
        if(!tally[typeof x]){
            tally[typeof x] = 0
        }

        tally[typeof x] += 1;
    });
    Object.entries(tally).sort((a, b) => {
       return b[1] - a[1];
    }).map(x =>{
        console.log(`${x[0]} = ${x[1]}`);
    });

}
solve(42, 'cat', 15, 'kitten', 'tomcat');