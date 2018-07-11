/**
 * Write a function that perform mergesort.
 * It will take in an array of numbers and return a sorted array numbers.
 */

const mergeSort = (nums) => {
    if (nums.length < 2) return nums;

    const length = nums.length;
    const middle = Math.floor(length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle, length);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return stitch(sortedLeft, sortedRight);
}

const stitch = (left, right) => {
    const results = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift()); 
        } else {
            results.push(right.shift());
        }
    }

    while (left.length) {
        results.push(left.shift());
    }
    while (right.length) {
        results.push(right.shift());
    }

    return results;
}

module.exports.mergeSort = mergeSort;