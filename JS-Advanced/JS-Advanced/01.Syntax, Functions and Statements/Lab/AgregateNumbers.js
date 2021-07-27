function Agregate(parameters) {
    let result = 0;
    for (var i = 0; i < parameters.length; i++) {
        result += parameters[i];
    }
    console.log(result);
    result = 0;
    for (var j = 0; j < parameters.length; j++) {
        let currRes = 1 / parameters[j];
        result += currRes;
    }
    console.log(result);
    concatResult = "";
    for (var k = 0; k < parameters.length; k++) {
        let currRes = String(parameters[k]);
        concatResult += currRes;
    }
    console.log(concatResult);
}