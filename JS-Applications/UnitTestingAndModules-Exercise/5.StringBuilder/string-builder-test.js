const assert = require('chai').assert;
const StringBuilder = require('./string-builder');

describe('StringBuilder', function () {
    let sb;
    beforeEach(() => {
        sb = new StringBuilder();
    });
    it('shouldHaveAllProperties', function () {
        assert.hasOwnProperty('append');
        assert.hasOwnProperty('prepend');
        assert.hasOwnProperty('insertAt');
        assert.hasOwnProperty('remove');
        assert.hasOwnProperty('toString');
    });
    describe('verifyParams', function () {
        it('shouldThrowExceptionIfPassedParamNotString', function () {
            //Arrange
            let string = 'string';
            let invalidParam = 123
            sb = new StringBuilder(string);
            //Assert
            assert.throw(() => {
                //Act
                sb.append(invalidParam)
            }), TypeError, 'Argument must be string';
        });
    });
    describe('toString', function () {
        it('shouldReturnTheGivenArrayJoinedByEmptySpace', function () {
            //Arrange
            let string = 'string';
            sb = new StringBuilder(string);
            sb.append(string);
            let expectedArray = [string, string];
            //Act
            let result = sb.toString();
            //Assert
            assert.equal(result, expectedArray.join(''));
        });
    });
    describe('constructor', function () {
        it('shouldBeAbleToBeInstancedWithoutParams', function () {
            //Arrange
            let expectedString = '';
            //Act
            sb = new StringBuilder();
            //Assert
            assert.equal(sb.toString(), expectedString);
        });
        it('shouldReturnEmptyStringIfPassedStringUndefined', function () {
            //Arrange
            let string = undefined;
            let expectedResult = '';
            //Act
            sb = new StringBuilder(string);
            //Assert
            assert.equal(sb.toString(), expectedResult);
        });
        it('shouldReturnJoinedArrayWithAppendedStringIfOperationSuccessful', function () {
            //Arrange
            let string = 'string';
            let expectedResult = string;
            //Act
            sb = new StringBuilder(string);
            //Assert
            assert.equal(sb.toString(), expectedResult);
        });
    });
    describe('append', function () {
        it('shouldReturnJoinedArrayWithApendedStringIfSuccessful', function () {
            //Arrange
            let string = 'string';
            let stringToAppend = '123'
            let expectedArray = [string, stringToAppend];
            //Act
            sb = new StringBuilder(string);
            sb.append(stringToAppend);
            //Assert
            assert.equal(sb.toString(), expectedArray.join(''));
        });
    });
    describe('prepend', function () {
        it('shouldReturnJoinedArrayWithPrependedStringIfSuccessful', function () {
            //Arrange
            let string = 'string';
            let stringToPrepend = '123';
            let expectedArray = [stringToPrepend, string];
            //Act
            sb = new StringBuilder(string);
            sb.prepend(stringToPrepend);
            //Assert
            assert.equal(sb.toString(), expectedArray.join(''));
        });
    });
    describe('insertAt', function () {
        it('shouldReturnJoinedArrayWithInsertedStringIfSuccessful', function () {
            //Arrange
            let string = 'string';
            let string2 = '123';

            let startIndex = 6;
            let stringToInsert = 'insertion';

            let expectedArray = [string, stringToInsert, string2];
            sb = new StringBuilder(string);
            sb.append(string2);
            //Act
            sb.insertAt(stringToInsert, startIndex);
            //Assert
            assert.equal(sb.toString(), expectedArray.join(''));
        });
        it('shouldSpreadStringAfterSuccessfulInsert', function () {
            //Arrange
            let string = 'string';
            let startIndex = 0;
            let expectedArray = [...string];
            sb = new StringBuilder();
            //Act
            sb.insertAt(string, startIndex);
            //Assert
            assert.deepEqual(sb._stringArray, expectedArray)
        });
    });
    describe('remove', function () {
        it('shouldReturnCorrectValueWithSwappedParams', function () {
            //Arrange
            let string = 'string';
            let startIndex = 0;
            let length = 2;
            sb = new StringBuilder(string);
            let expectedResult = 'ring';
            //Act
            sb.remove(length, startIndex);
            //Assert
            assert.notEqual(sb.toString(), expectedResult);
        });
        it('shouldRemoveLettersFromStartIndexToLengthIfSuccessful', function () {
            //Arrange
            let string = 'string';
            let startIndex = 0;
            let length = 2;
            sb = new StringBuilder(string);
            let expectedResult = 'ring';
            //Act
            sb.remove(startIndex, length);
            //Assert
            assert(sb.toString(), expectedResult);
        });
    });
});