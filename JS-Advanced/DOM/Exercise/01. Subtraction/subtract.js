function subtract() {
    let firstNumberVal = document.querySelector('#firstNumber').value;
    let secondNumberVal = document.querySelector('#secondNumber').value;
    document.querySelector('#result').innerHTML = firstNumberVal - secondNumberVal;
}