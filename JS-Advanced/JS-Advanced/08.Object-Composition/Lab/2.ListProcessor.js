function solve(list) {
    let array = list;
    function innerFunc() {
        let resultArr = [];
        array.map(x => {
            [command, string] = x.split(' ');
            if (command == 'add') {
                resultArr.push(string);
            }
            else if (command == 'remove') {
                resultArr.forEach(stringEl => {
                    if (stringEl == string) {
                        let index = resultArr.indexOf(string);
                        resultArr.splice(index, 1);
                    }
                });
            }
            else if (command == 'print') {
                console.log(resultArr.join(','));
            }
        });

    }
    return innerFunc();
}
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);