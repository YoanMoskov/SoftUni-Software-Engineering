function solve() {
    let numberInputEl = document.querySelector('#input');
    let fromMenuEl = document.querySelector('#selectMenuFrom');
    let toMenuEl = document.querySelector('#selectMenuTo');
    let buttonEl = document.querySelector('#container > button');
    let resultEl = document.querySelector('#result');

    let optionBinary = document.createElement('option');
    let optionHexadecimal = document.createElement('option');
    optionBinary.setAttribute('value', 'binary');
    optionHexadecimal.setAttribute('value', 'hexadecimal');
    optionBinary.innerHTML = 'Binary';
    optionHexadecimal.innerHTML = 'Hexadecimal';
    toMenuEl.appendChild(optionBinary);
    toMenuEl.appendChild(optionHexadecimal);

    buttonEl.addEventListener('click', onClickConversion)
    function onClickConversion(e) {
        let numToConvert = Number(numberInputEl.value);
        if (toMenuEl.value == 'binary') {
            resultEl.value = convertToBinary(numToConvert)
        }
        else if (toMenuEl.value == 'hexadecimal') {
            resultEl.value = converToHexadecimal(numToConvert);
        }
    }
    function convertToBinary(numToConvert) {
        return (numToConvert >>> 0).toString(2)
    }
    function converToHexadecimal(numToConvert) {
        return numToConvert.toString(16).toUpperCase;
    }
}  