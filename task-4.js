// Find the maximum interval between two consecutive numbers. Numbers are entered as arguments
// Example:
// maxInterval(3,5,2,7); //5
// maxInterval(3,5,2,7, 11, 0, -2); //11

const maxInterval = (...numbers) => {
    let interval = 0;
    for (let i = 1; i < numbers.length; i++){
        let min = Math.abs(numbers[i-1] - numbers[i]);
        if (interval < min){
            interval = min;
        }
    }
    return(interval);
}

console.log(maxInterval(3,5,2,7,11,0,-2));