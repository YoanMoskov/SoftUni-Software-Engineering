function solution() {
    let string = '';
    let objString = {
        append: function(stringToAppend){
            string += stringToAppend;
        },
        removeStart: function(charsCount) {
            string = string.substring(charsCount, string.length);
        },
        removeEnd: function(charsCount) {
            string = string.substring(0, string.length - charsCount);
        },
        print: function() {
            console.log(string);
        }
    };
    return objString;
}
let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();