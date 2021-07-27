const assert = require('chai').assert;
const lookupChar = require('./3.CharLookup');

describe('lookupChar', function () {
    it('shouldReturnIncorrectIndexMessageIfStringIsEmpty', function () {
        //Arrange
        let string = '';
        let index = 0;
        //Act
        let result = lookupChar(string, index);
        //Assert
        assert.equal(result, 'Incorrect index');
    });
    it('shouldReturnUndefinedIfFirstParamDifferentThanString', function () {
        //Arrange
        let string = 123;
        let index = 2;
        //Act
        let result = lookupChar(string, index);
        //Assert
        assert.equal(result, undefined);
    });
    it('shouldReturnUndefinedIfSecondParamIsNotNumber', function () {
        //Arrange
        let string = 'asd';
        let index = 'asd';
        //Act
        let result = lookupChar(string, index);
        //Assert
        assert.equal(result, undefined);
    });
    it('shouldReturnUndefinedIfSecondParamIsFloatingPoint', function () {
        //Arrange
        let string = 'asd';
        let index = 2.12;
        //Act
        let result = lookupChar(string, index);
        //Assert
        assert.equal(result, undefined);
    });
    it('shouldReturnIncorrectIndexMessageIfIndexIsBiggerThanStringLength', function () {
        //Arrange
        let string = 'asd';
        let index = 5;
        //Act
        let result = lookupChar(string, index);
        //Assert
        assert.equal(result, 'Incorrect index');
    });
    it('shouldReturnIncorrectIndexMessageIfIndexIsNegative', function () {
        //Arrange
        let string = 'asd';
        let index = -5;
        //Act
        let result = lookupChar(string, index);
        //Assert
        assert.equal(result, 'Incorrect index');
    });
    it('shouldReturnCharIfAllParamertersAreValid', function () {
        //Arrange
        let string = 'asd';
        let index = 1;
        //Act
        let result = lookupChar(string, index);
        //Assert
        assert.equal(result, 's');
    });
});