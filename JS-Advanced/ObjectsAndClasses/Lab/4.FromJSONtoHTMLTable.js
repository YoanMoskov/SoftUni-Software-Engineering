function solve(arrayInput) {
    let obj = JSON.parse(arrayInput);

    let html = '<table>\n';
    html += `   <tr>${Object.keys(obj[0]).map(x => `<th>${x}</th>`).join('')}</tr>\n`
    obj.forEach(row => {
        let keys = Object.keys(row);

        keys.forEach(key => {
            let strCurr = String(row[key]);
            row[key] = replaceAll(strCurr);
        });
        html += `   <tr>${Object.values(row).map(x => `<td>${x}</td>`).join('')}</tr>\n`
    });
    html += '</table>';
    console.log(html);
    function replaceAll(string) {
        let arrayTemp = [];
        let stringResult = string;
        if (string.includes('&')) {
            arrayTemp = stringResult.split('&');
            stringResult = arrayTemp.join('&amp;');
            arrayTemp = [];
        }
        if (string.includes('<')) {
            arrayTemp = stringResult.split('<');
            stringResult = arrayTemp.join('&lt;');
            arrayTemp = [];
        }
        if (string.includes('>')) {
            arrayTemp = stringResult.split('>');
            stringResult = arrayTemp.join('&gt;');
            arrayTemp = [];
        }
        return stringResult;
    }
}
solve(['[{"Name":"""""Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);