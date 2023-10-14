var createCounter = function(init) {

    let currentValue = init;
    //return init;
    return{
        increment()
        {
            currentValue += 1;
            return currentValue;
        },
        decrement()
        {
            currentValue -= 1;
            return currentValue;
        },
        reset()
        {
            currentValue = init;
            return init;
        }
    }
};

const counter = createCounter(0)
//console.log(counter)
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.reset());



