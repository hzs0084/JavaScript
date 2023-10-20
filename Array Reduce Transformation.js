var reduce = function(nums, fn, init) {
    var accumulator = init;
    
    for (var i = 0; i < nums.length; i++) {
        accumulator = fn(accumulator, nums[i]);
    }
    
    return accumulator;
};

// Test cases
var nums1 = [1, 2, 3, 4];
var sum = function(accum, curr) { return accum + curr; };
var init1 = 0;
console.log(reduce(nums1, sum, init1)); // Output: 10

var nums2 = [1, 2, 3, 4];
var sumSquares = function(accum, curr) { return accum + curr * curr; };
var init2 = 100;
console.log(reduce(nums2, sumSquares, init2)); // Output: 130

var nums3 = [];
var zeroReducer = function(accum, curr) { return 0; };
var init3 = 25;
console.log(reduce(nums3, zeroReducer, init3)); // Output: 25
