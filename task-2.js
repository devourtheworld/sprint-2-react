// The function takes any number of strings and returns the sum of their lenght.

// Example:
// console.log(sumOfLen('hello', 'hi')); //7
// console.log(sumOfLen('hi')); //2

const sumOfLen = (...string) => {
    return(string.reduce((value, el) => value + el).length);
}

console.log(sumOfLen('hello', 'hi', 'zbyslav')); //7
