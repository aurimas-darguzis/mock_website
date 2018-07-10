const checkString = require('../1');

describe('Check if string has all unique characters', () => {
    it('should be defined', () => {
        expect(checkString).toBeDefined();
    });

    it('should return true when passing string with unique characters', () => {
        const expected = true;
        const actual = checkString.hasUniqueCharacters('abcd');
        expect(actual).toEqual(expected);
    });
});
