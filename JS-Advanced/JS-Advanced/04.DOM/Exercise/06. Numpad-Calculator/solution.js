function solve() {
    let keysEl = document.querySelectorAll('#calculator > div.keys > button');
    let expressionLogEl = document.querySelector('#expressionOutput')
    let resultOutputEl = document.querySelector('#resultOutput');
    let clearButtonEl = document.querySelector('#calculator > div.top > button');

    for (const key of keysEl) {
        key.addEventListener('click', logOnClick)
        function logOnClick(e) {
            
            if (key.value == '=') {
                let string = expressionLogEl.textContent;
                resultOutputEl.textContent = doEquation(string);
            }
            else if (key.value == '+' || key.value == '-' || key.value == '/' || key.value == '*') {
                expressionLogEl.textContent += ` ${key.value} `
            }
            else{
                expressionLogEl.textContent += `${key.value}`;
            }
        }
    }
    clearButtonEl.addEventListener('click', onClickClear)
    function onClickClear(e) {
        resultOutputEl.textContent = '';
        expressionLogEl.textContent = '';
    }
    function doEquation(string){
        if (string.includes(' + ')) {
            let arr = string.split(' + ');
            if (arr.includes("")) {
                return 'NaN';
            }
            let result = Number(arr[0]) + Number(arr[1]);
            return result;
        }
        else if(string.includes(' - ')){
            let arr = string.split(' - ');
            if (arr.includes("")) {
                return 'NaN';
            }
            let result = Number(arr[0]) - Number(arr[1]);
            return result;
        }
        else if(string.includes(' / ')){
            let arr = string.split(' / ');
            if (arr.includes("")) {
                return 'NaN';
            }
            let result = Number(arr[0]) / Number(arr[1]);
            return result;
        }
        else if(string.includes(' * ')){
            let arr = string.split(' * ');
            if (arr.includes("")) {
                return 'NaN';
            }
            let result = Number(arr[0]) * Number(arr[1]);
            return result;
        }
    }

}