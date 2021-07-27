function circleArea (param){
    let radius;
    if(typeof(param) === 'number'){
        console.log((Math.PI * param * param).toFixed(2));
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(param)}.`)
    }
}

circleArea('name')