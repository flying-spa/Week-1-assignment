/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    //calculate the sum from 1 to n
    var startTime = Date.now();
    var sum = 0;
    for(var i=0; i<=n; i++) {
        sum += i;
    }
    var endTime = Date.now();
    return endTime - startTime;
}


// console.log(calculateTime(100));
// console.log(calculateTime(100000));
// console.log(calculateTime(1000000000));

