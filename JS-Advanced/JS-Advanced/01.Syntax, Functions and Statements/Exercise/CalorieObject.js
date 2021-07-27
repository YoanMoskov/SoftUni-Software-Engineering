function solve(input){
    let output = "";
    for (let i = 0; i < input.length; i+=2) {
        let type = input[i];
        let calories = input[i+1];
        let obj = {type, calories};
        if (i + 2 === input.length) {
            output += (`${obj.type}: ${obj.calories}`)
        }
        else{
            output += (`${obj.type}: ${obj.calories}, `)
        }
    }
    console.log(`{ ${output} }`)
}
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])