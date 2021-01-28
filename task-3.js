// The user enters as arguments the number of seconds, minutes, hours, days, weeks, 
// months, years.
// Output how many seconds are in all this.
// All parameters are optional. Consider 30 days in a month.

// Example:
// howMuchSec(12,3); //192
// howMuchSec(1, 33, 22); //81181

function howMuchSec(seconds = 0, minutes = 0, hours = 0, days = 0,
    weeks = 0, months = 0, years = 0){
        const timeInSec = [
            min = 60,
            hor = 3600,
            day = 86400,
            wee = 604800,
            mon = 2628000,
            yer = 31535965
        ]
        return (seconds + minutes*min + hours*hor + days*day + weeks*wee + 
            months*mon + years*yer);
}

console.log(howMuchSec(1, 1, 1, 1, 1, 1));
