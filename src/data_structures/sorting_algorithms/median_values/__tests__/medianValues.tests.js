const median = require('../median_values');

describe('median values', () => {
    it('shouled be defined', () => {
        expect(median).toBeDefined();
    });

    it('should find a median from 2 arrays', () => {
        const nums = [1, 2, 3, 4, 5];
        const nums2 = [6, 7, 8, 9];
        const expected = 5;
        const actual = median.findMedian(nums, nums2);
        expect(actual).toEqual(expected);
    });
});
