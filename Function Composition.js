var compose = function(functions) {
    return function(x) {
      // Initialize the result with the input value x
      let result = x;
  
      // Iterate through the functions from right to left
      for (let i = functions.length - 1; i >= 0; i--) {
        result = functions[i](result);
      }
  
      return result;
    };
  };
  
  // Example usages:
  const fn1 = compose([x => x + 1, x => x * x, x => 2 * x]);
  console.log(fn1(4)); // Output: 65
  
  const fn2 = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
  console.log(fn2(1)); // Output: 1000
  
  const fn3 = compose([]);
  console.log(fn3(42)); // Output: 42
  