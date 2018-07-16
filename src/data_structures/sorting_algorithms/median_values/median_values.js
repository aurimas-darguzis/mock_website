const findMedian = (nums, nums2) => {
    const results = [];

    while(nums.length && nums2.length) {
        if (nums[0] <= nums2[0]) {
            results.push(nums.shift());
        } else {
            results.push(nums2.shift());
        }

        const mergedArrays = [...results, ...nums, ...nums2];
        const median = Math.floor(mergedArrays.length / 2);
        return mergedArrays[median];
    }
}

module.exports.findMedian = findMedian;