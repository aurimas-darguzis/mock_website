const add = require('../_add_strings');

describe('Add Strings test', () => {
    it('has a module', () => {
        expect(add).toBeDefined();
    });
});

describe('add', () => {
    it('adds two strings', () => {
        const expected = 'ab';
        const actual = add.addStrings('a', 'b');
        expect(actual).toEqual(expected);
    });

    it('returns empty string when adding string and boolean', () => {
        const expected = '';
        const actual = add.addStrings('a', true);
        expect(actual).toEqual(expected);
    });

    it('returns empty string when adding string and number', () => {
        const expected = '';
        const actual = add.addStrings('a', 1);
        expect(actual).toEqual(expected);
    });

    it('returns empty string when adding string and object', () => {
        const expected = '';
        const actual = add.addStrings('a', {});
        expect(actual).toEqual(expected);
    });

    it('returns empty string when adding string and array', () => {
        const expected = '';
        const actual = add.addStrings('a', []);
        expect(actual).toEqual(expected);
    });

    it('returns empty string when adding null and undefined', () => {
        const expected = '';
        const actual = add.addStrings(null, undefined);
        expect(actual).toEqual(expected);
    });

    it('returns empty string when passing no arguments', () => {
        const expected = '';
        const actual = add.addStrings();
        expect(actual).toEqual(expected);
    });
});

describe('isFailedStringAdd', () => {
    it('returns true if empty string', () => {
        const expeceted = true;
        const actual = add.isFailedStringAdd('');
        expect(actual).toEqual(expeceted);
    });

    it('returns false if passing no value', () => {
        const expeceted = false;
        const actual = add.isFailedStringAdd();
        expect(actual).toEqual(expeceted);
    });
});
