var filter = function(arr, fn) {
    var filteredArr = [];
    
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    
    return filteredArr;
};

// Test cases
var arr1 = [0, 10, 20, 30];
var greaterThan10 = function(n) { return n > 10; };
console.log(filter(arr1, greaterThan10)); // Output: [20, 30]

var arr2 = [1, 2, 3];
var firstIndex = function(n, i) { return i === 0; };
console.log(filter(arr2, firstIndex)); // Output: [1]

var arr3 = [-2, -1, 0, 1, 2];
var plusOne = function(n) { return n + 1; };
console.log(filter(arr3, plusOne)); // Output: [-2, 0, 1, 2]
