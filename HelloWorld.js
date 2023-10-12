/** Day 1
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};

//The below lines are not required for LeetCode. 
const f = createHelloWorld(); //store the value of the function and then output it
console.log(f()); //Outputs Hello World

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */