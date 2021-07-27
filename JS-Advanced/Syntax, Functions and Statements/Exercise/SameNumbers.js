function CheckIfSameNumbers(number){
    let numberAsText = String(number);
    const digitToMatch = numberAsText[0];
    let allAreEqual = true;
    let sum = Number(digitToMatch);

    for (let i = 1; i < numberAsText.length; i++) {
        let currDigit = numberAsText[i]
        if(currDigit !== digitToMatch){
            allAreEqual = false;
        }
        sum += Number(numberAsText[i]);
    } 

    console.log(allAreEqual);
    console.log(sum);
}
CheckIfSameNumbers(358)