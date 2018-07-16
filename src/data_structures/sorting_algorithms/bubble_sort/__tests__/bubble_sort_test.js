const bubble = require('../bubble_sort');

describe('bubble sort', () => {
    it('should be defined', () => {
        expect(bubble).toBeDefined();
    });

    it('should sort correctly', () => {
        const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
        bubble.bubbleSort(nums);
        expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});