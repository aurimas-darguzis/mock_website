const sort = require('../mergeSort');

describe('merge sort', () => {
    it('should be defined', () => {
        expect(sort).toBeDefined();
    });

    it('should sort', () => {
        const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const actual = sort.mergeSort(nums);
        expect(actual).toEqual(expected);
    });
});