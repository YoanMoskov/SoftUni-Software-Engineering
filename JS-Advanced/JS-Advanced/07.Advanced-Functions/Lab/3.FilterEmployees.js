function solve(data, criteria) {
    let employees = JSON.parse(data);
    let propToFind = criteria.split('-')[0];
    let valueOfProp = criteria.split('-')[1];
    let counter = 0;
    let result = [];
    employees.map(employee => {
        let value = employee[propToFind];
        if (propToFind == 'all') {
            result.push(`${counter++}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        }
        else if (value == valueOfProp) {
            result.push(`${counter++}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        }
    });
    console.log(result.join('\n'));
}
solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'all');