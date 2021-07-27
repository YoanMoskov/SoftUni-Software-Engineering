function logSquareOfStars(count = 5){
    let num = count;
    for(let i = 0; i < num; i++){
        console.log("* ".repeat(count))
    }
}
logSquareOfStars();