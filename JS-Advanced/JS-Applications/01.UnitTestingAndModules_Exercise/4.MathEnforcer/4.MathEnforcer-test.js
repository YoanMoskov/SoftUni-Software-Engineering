const assert = require('chai').assert;
const mathEnforcer = require('./4.MathEnforcer');

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('shouldReturnUndefinedIfPassedParamIsNotNumber', function () {
            //Arrange
            let num = 'not a number';
            //Act
            let result = mathEnforcer.addFive(num);
            //Assert
            assert.equal(result, undefined);
        });
        it('shouldReturnTheNumberPlusFive', function () {
            //Arrange
            let num = 5;
            //Act
            let result = mathEnforcer.addFive(num);
            //Assert
            assert.equal(result, 10);
        });
        it('shouldReturnNumberPlusFiveIfNegativeNum', function () {
            //Arrange
            let num = -5;
            //Act
            let result = mathEnforcer.addFive(num);
            //Assert
            assert.equal(result, 0);
        });
        it('shouldReturnFloatingPointIfPassedParamIsFloatingPoint', function () {
            //Arrange
            let num = 5.9;
            //Act
            let result = mathEnforcer.addFive(num);
            //Assert
            assert.closeTo(result, 10.9, 0.1);
        });
    });
    describe('subtractTen', function () {
        it('subtractTenShouldReturnUndefinedIfPassedParamNotNumber', function () {
            //Arrange
            let num = 'not a number';
            //Act
            let result = mathEnforcer.subtractTen(num);
            //Assert
            assert.equal(result, undefined);
        });
        it('subtractTenShouldReturnTheNumberMinusTen', function () {
            //Arrange
            let num = 5;
            //Act
            let result = mathEnforcer.subtractTen(num);
            //Assert
            assert.equal(result, -5);
        });
        it('shouldReturnNumberMinusTenIfNegativeNum', function () {
            //Arrange
            let num = -5;
            //Act
            let result = mathEnforcer.subtractTen(num);
            //Assert
            assert.equal(result, -15);
        });
        it('shouldReturnFloatingPointIfPassedParamIsFloatingPoint', function () {
            //Arrange
            let num = 5.9;
            //Act
            let result = mathEnforcer.subtractTen(num);
            //Assert
            assert.closeTo(result, -4.1, 0.1);
        });
    })
    describe('sum', function () {
        it('sumShouldReturnUndefinedIfFirstParamIsNotNum', function () {
            //Arrange
            let num1 = 'not a num';
            let num2 = 5;
            //Act
            let result = mathEnforcer.sum(num1, num2);
            //Assert
            assert.equal(result, undefined);
        });
        it('shouldReturnUndefinedIfSecondParamIsNotNum', function () {
            //Arrange
            let num1 = 5;
            let num2 = 'not a num';
            //Act
            let result = mathEnforcer.sum(num1, num2);
            //Assert
            assert.equal(result, undefined);
        });
        it('shouldReturnTheSumOfTheTwoParamsIfBothAreNumbers', function () {
            //Arrange
            let num1 = 5;
            let num2 = 10;
            //Act
            let result = mathEnforcer.sum(num1, num2);
            //Assert
            assert.equal(result, 15);
        });
        it('shouldReturnTheSumOfTheTwoParamsIfBothIntegersAreNumbers', function () {
            //Arrange
            let num1 = 5;
            let num2 = 10;
            //Act
            let result = mathEnforcer.sum(num1, num2);
            //Assert
            assert.equal(result, 15);
        });
        it('shouldReturnNegativeSumIfBothIntegersAreNegative', function () {
            //Arrange
            let num1 = -5;
            let num2 = -10;
            //Act
            let result = mathEnforcer.sum(num1, num2);
            //Assert
            assert.equal(result, -15);
        });
        it('shouldReturnFloatingPointIfFirstParamIsFloatingPoint', function () {
            //Arrange
            let num1 = 5.9;
            let num2 = 5;
            //Act
            let result = mathEnforcer.sum(num1, num2);
            //Assert
            assert.closeTo(result, 10.9, 0.1);
        });
        it('shouldReturnFloatingPointIfSecondParamIsFloatingPoint', function () {
            let num1 = 5;
            let num2 = 5.9;
            //Act
            let result = mathEnforcer.sum(num1, num2);
            //Assert
            assert.closeTo(result, 10.9, 0.1);
        });
        it('shouldReturnFloatingPointIfBothParamsAreFloatingPoint', function () {
            let num1 = 5.9;
            let num2 = 5.9;
            //Act
            let result = mathEnforcer.sum(num1, num2);
            //Assert
            assert.closeTo(result, 11.8, 0.1);
        });
    });
});
