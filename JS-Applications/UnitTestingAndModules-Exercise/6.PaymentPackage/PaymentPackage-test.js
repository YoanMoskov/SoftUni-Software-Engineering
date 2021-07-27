const assert = require('chai').assert;
const PaymentPackage = require('./PaymentPackage');

describe('PaymentPackage', function () {
    let name = 'John';
    let value = 10;
    beforeEach(() => {
        pp = new PaymentPackage(name, value);
    });
    describe('constructor', function () {
        it('constructorShouldWorkProperly', function () {
            let name = pp.name;
            let value = pp.value;
            let VAT = pp.VAT;
            let active = pp.active;
            assert.equal(name, 'John');
            assert.equal(value, 10);
            assert.equal(VAT, '20');
            assert.equal(active, true);
        });
    });
    describe('getters', function () {
        it('getNameShouldReturnName', function () {
            assert.equal(pp.name, 'John');
        });
        it('getValueShouldReturnValue', function () {
            assert.equal(pp.value, 10);
        });
    });
    describe('setters', function () {
        it('setNameShouldThrowErrorIfPassedParamEmptyString', function () {
            assert.throw(() => {
                pp = new PaymentPackage('', 123)
            }), Error, 'Name must be a non-empty string';
        });
        it('setNameShouldThrowErrorIfPassedParamNotString', function () {
            assert.throw(() => {
                pp = new PaymentPackage(123, 123)
            }), Error, 'Name must be a non-empty string';
        });
        it('setValueShouldThrowErrorIfPassedParamNotNum', function () {
            assert.throw(() => {
                pp = new PaymentPackage(name, name);
            }), Error, 'Value must be a non-negative number';
        });
        it('setValueShouldThrowErrorIfPassedParamNegativeNum', function () {
            assert.throw(() => {
                pp = new PaymentPackage(name, -10);
            }), Error, 'Value must be a non-negative number';
        });
        it('setVatShouldThrowErrorIfPassedParamNotNum', function () {
            pp = new PaymentPackage(name, value);
            assert.throw(() => {
                pp.VAT = name;
            }), Error, 'VAT must be a non-negative number';
        });
        it('setVatShouldThrowErrorIfPassedParamNegativeNum', function () {
            pp = new PaymentPackage(name, value);
            assert.throw(() => {
                pp.VAT = -10;
            }), Error, 'VAT must be a non-negative number';
        });
        it('setActiveShouldThrowErrorIfPassedNotBool', function () {
            pp = new PaymentPackage(name, value);
            assert.throw(() => {
                pp.active = -10;
            }), Error, 'Active status must be a boolean';
        });
    });
    describe('toString', function () {
        it('shouldReturnProperOutput', function () {
            //Arrange
            pp = new PaymentPackage(name, value);
            let expectedOutput = [
                `Package: ${name}` + (''),
                `- Value (excl. VAT): ${value}`,
                `- Value (VAT ${20}%): ${value * (1 + 20 / 100)}`];
            assert.equal(expectedOutput.join('\n'), pp.toString());
        });
    });
});