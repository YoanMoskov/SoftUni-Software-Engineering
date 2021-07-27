function solve(params){
    let number = params[0];
    for(let i = 1; i < params.length; i++){
        if(params[i] === 'chop'){
            number /= 2;
        }
        else if(params[i] === 'dice'){
            number = Math.sqrt(number);
        }
        else if(params[i] === 'spice'){
            number += 1;
        }
        else if(params[i] === 'bake'){
            number *= 3;
        }
        else if(params[i] === 'fillet'){
            number = number - (number * 0.2);
        }

        console.log(number);
    }
}
solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])