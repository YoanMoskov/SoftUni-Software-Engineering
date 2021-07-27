function solve(steps, lenghtFootprint, speed){

    let totalLength = steps * lenghtFootprint;
    let speedMeterPerSec = speed / 3.6;
    let totalBreakTime = Math.floor(totalLength / 500);
    let time = (totalLength / speedMeterPerSec) + totalBreakTime * 60;

    let timeInHours = Math.floor(time / 3600);
    let timeInMins = Math.floor(time / 60);
    let timeInSecs = Math.ceil(time % 60);

    console.log(`${timeInHours < 10 ? 0 : ""}${timeInHours}:${timeInMins < 10 ? 0 : ""}${timeInMins}:${timeInSecs < 10 ? 0 : ""}${timeInSecs}`);
    
}

solve(2564, 0.70, 5.5)