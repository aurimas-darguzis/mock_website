const add = require('../_add_numbers');

describe('Add Numbers test', () => {
    it('has a module', () => {
        expect(add).toBeDefined();
    });

    describe('add', () => {
        it('adds two positive integers together', () => {
            const expected = 2;
            const actual = add.addNumbers(1, 1);
            expect(actual).toEqual(expected);
        });

        it('adds two negative integers togeher', () => {
            const expected = -2;
            const actual = add.addNumbers(-1, -1);
            expect(actual).toEqual(expected);
        });

        it('adds a negative and a positive integers togehter', () => {
            const expected = 0;
            const actual = add.addNumbers(1, -1);
            expect(actual).toEqual(expected);
        });

        it('adds zero to zero', () => {
            const expected = 0;
            const actual = add.addNumbers(0, 0);
            expect(actual).toEqual(expected);
        });
    });
});