function stringLenght(firstWord, secondWord, thirdWord){
    let sumLength;
    let avgLength;

    let firstWordLength = firstWord.length;
    let secondWordLength = secondWord.length;
    let thirdWordLength = thirdWord.length;
    
    sumLength = firstWordLength + secondWordLength + thirdWordLength;
    avgLength = Math.floor(sumLength / 3);
    
    console.log(sumLength);
    console.log(avgLength);
}