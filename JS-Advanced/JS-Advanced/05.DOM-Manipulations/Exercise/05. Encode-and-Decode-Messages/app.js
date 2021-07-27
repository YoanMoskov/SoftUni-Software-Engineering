function encodeAndDecodeMessages() {
    let firstTextBoxEl = document.querySelector('#main > div:nth-child(1) > textarea');
    let encodeButtonEl = document.querySelector('#main > div:nth-child(1) > button');
    let secondTextBoxEl = document.querySelector('#main > div:nth-child(2) > textarea');
    let decodeButtonEl = document.querySelector('#main > div:nth-child(2) > button');
    encodeButtonEl.addEventListener('click', encodeText);
    decodeButtonEl.addEventListener('click', decodeText);
    function encodeText(e) {
        let string = firstTextBoxEl.value;
        let result = '';
        for (let i = 0; i < string.length; i++) {
            result += String.fromCharCode(Number(string.charCodeAt(i)) + 1);
        }
       
        firstTextBoxEl.value = '';
        secondTextBoxEl.value = result;
    }
    function decodeText(e){
        let string = secondTextBoxEl.value;
        let result = '';
        for (let i = 0; i < string.length; i++) {
            result += String.fromCharCode(Number(string.charCodeAt(i)) - 1);
        }
       
        secondTextBoxEl.value = result;
    }
}