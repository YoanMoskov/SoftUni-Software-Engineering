function solve([speed, area]){
    let speedLimit = 0;
    if (area === 'motorway'){
        speedLimit = 130;
    }
    else if (area === 'interstate'){
        speedLimit = 90;
    }
    else if (area === 'city'){
        speedLimit = 50;
    }
    else if (area === 'residential'){
        speedLimit = 20;
    }
    let speedOver = 0;
    if (speed - speedLimit > 0){
        speedOver = speed - speedLimit;
        if (speedOver <= 20){
            console.log("speeding");
        }
        else if (speedOver <= 40){
            console.log("excessive speeding");
        }
        else {
            console.log("reckless driving")
        }
    }
}
solve([200, 'motorway'])