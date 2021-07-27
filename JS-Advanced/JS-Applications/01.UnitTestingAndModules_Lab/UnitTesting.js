//AAA - Arrange/Act/Assert
//Arrange - all needed data for the test
//Act - the action we are testing
//Assert - check if the result is equal to the expected

//Mocha
//describe - group of tests
//it - concrete test

//Chai
//Asserts
const chai = require('chai').assert;
const fileToTest = require('./path');

describe('things we are testing', function () {
    it('should ', function () {
        //Arrange
        let firstParam = 1;
        let secondParam = 2;
        //Act
        let result =
        //Assert
        assert.equal(firstParam + secondParam, 3);
    });

    it('should ', function () {

    });
    .
    .
    .
})