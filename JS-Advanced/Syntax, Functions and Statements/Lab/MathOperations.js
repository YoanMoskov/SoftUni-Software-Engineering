function mathOperation(n1, n2, operator){
    let result;

    if(operator == "+"){
        result = n1 + n2;
    }
    else if(operator == "-"){
        result = n1 - n2;
    }
    else if(operator == "*"){
        result = n1 * n2;
    }
    else if(operator == "/"){
        result = n1 / n2;
    }
    else if(operator == "%"){
        result  = n1 % n2;
    }
    else if(operator == "**"){
        result  = n1 ** n2;
    }
    console.log(result);
}