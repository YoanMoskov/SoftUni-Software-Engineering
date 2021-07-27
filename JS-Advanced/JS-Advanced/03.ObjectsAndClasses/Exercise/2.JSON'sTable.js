function solve(arrayEmployees) {
    let employees = [];
    for (let i = 0; i < arrayEmployees.length; i++) {
        let currEmployee = {};
        currEmployee = JSON.parse(arrayEmployees[i]);
        employees.push(currEmployee);
    }
    let result = '<table>\n';
    employees.forEach(element => {
        result += '	<tr>\n'
        result += `		<td>${element.name}</td>\n`;
        result += `		<td>${element.position}</td>\n`;
        result += `		<td>${element.salary}</td>\n`;
        result += '	</tr>\n'
    });
    result += '</table>';
    console.log(result);
}
solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']);