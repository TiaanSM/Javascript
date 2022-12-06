// Javascript Decorator Functions

// Decorators wrap a function in another function.

// These wrappers "decorate" the original function with new capabilities.

// The concept of decorators is not exclusive to Javascript.

// Benefits: D.R.Y and clean code through composition.


// Example 1:
// Using closure to log how many times a function is called

let sum = (...args) => {
    return [...args].reduce((acc, num) => acc + num);
}

const callCounter = (fn) => {  // decorator function
    let count = 0;

    return (...args) => {
        // write to logs, console, db, etc
        console.log(`sum has been called ${count += 1} times`);
        return fn(...args);
    }
}

sum = callCounter(sum);

// sum has been called 1 times (from decorator console.log)
console.log(sum(2, 3, 5));  // 10

// sum has been called 2 times (from decorator console.log)
console.log(sum(1, 5));  // 6

// sum has been called 3 times (from decorator console.log)
console.log(sum(14, 5));  // 19



// Example 3:
// Check for valid data and number of params

let rectangleArea = (length, width) => {
    return length * width;
}

const countParams = (fn) => {  // decorator
    return (...params) => {
        if (params.length !== fn.length) {
            throw new Error(`Incorrect number of parameters for ${fn.name}`);
        }
        return fn(...params);
    }
}

const requireIntegers = (fn) => {  // decorator
    const name = fn.name;
    return (name, ...params) => {
        params.forEach(param => {
            if (!Number.isInteger(param)) {
                throw new TypeError(`Params for ${name} must be integers`);
            } 
        });
        return fn(...params);
    }
}
// Decorators can be used on other functions.

rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);
console.log(rectangleArea(20, 30));  // 600
console.log(rectangleArea(20, 30, 40));  // uncaught Error: Incorect number of parameters for rectangleArea
console.log(rectangleArea(20, "hey"));  // uncaught TypeError: Params for must be integers.



// Example 3:
// Decorating an async API call function:
// Time data requests during development.

let requestData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

const dataResponseTime = (fn) => {
    return async (url) => {
        console.time('fn');
        const data = await fn(url);
        console.timeEnd('fn');  // fn: 596.68...ms
        return data;
    }
}

const myTestFunction = async () => {
    requestData = dataResponseTime(requestData);
    const data = await requestData('https://jsonplaceholder.typicode.com/posts');
    console.log(data);  // (100) [{...}, {...} ...98]
}

myTestFunction();  // (look at = log on 97 and 105)