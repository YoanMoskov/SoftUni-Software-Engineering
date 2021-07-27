let assert = require('chai').assert;
let isOddOrEven = require('./2.EvenOrOdd.js');

describe('isOddOrEven', function () {
    it('shouldBeOddIfPassedStringHasEvenLength', function () {
        //Arrange
        let string = 'x';
        //Act
        let result = isOddOrEven(string);
        //Assert
        assert.equal(result, 'odd');
    });
    it('shouldBeEvenIfPassedStringHasEvenLength', function () {
        //Arrange
        let string = 'xx';
        //Act
        let result = isOddOrEven(string);
        //Assert
        assert.equal(result, 'even');
    });
    it('shouldReturnUndefinedIfPassedSomethingBesidesAString', function () {
        //Arrange
        let string = 1;
        //Act
        let result = isOddOrEven(string);
        //Assert
        assert.equal(result, undefined);
    });
});