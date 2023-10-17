/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var result = [];
    
    for (var i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    
    return result;
};

// Test cases
var arr1 = [1, 2, 3];
var plusone = function(n) { return n + 1; };
console.log(map(arr1, plusone)); // Output: [2, 3, 4]

var arr2 = [1, 2, 3];
var plusI = function(n, i) { return n + i; };
console.log(map(arr2, plusI)); // Output: [1, 3, 5]

var arr3 = [10, 20, 30];
var constant = function() { return 42; };
console.log(map(arr3, constant)); // Output: [42, 42, 42]