var createCounter = function(n) {
    let count = n;
  
    // Define the counter function inside the closure
    return function() {
      return count++;
    };
  };
  
  //The below lines are not required for leetcode but it's for my testing
  const counter = createCounter(10);
  console.log(counter()); // 10
  console.log(counter()); // 11
  console.log(counter()); // 12
  