/**
 * This function is used to generate fibonacci series based on input.
 * 
 * Algorithm Used - We use Memoization approach for solving this problem.
 * Memonization is an optimization technique used primarily to speed up 
 * computer programs by storing the results of expensive function calls.
 * Basically, if we just store the value of each index in a hash, 
 * we  avoid the computational time of that value for the next N times.
 */
//Cache Storage
var results = {
    "0": 0,
    "1": 1
};
var generateFibonacci = function (input) {
    var fib = [];
    var i;
    for (i = 0; i <= input; i++) {
        //Check if the number is already present in cache, if not compute it and store it
        if(!results.hasOwnProperty(i)){
             results[i] = fib[i - 2] + fib[i - 1];
        } 
        //Get the result from cache
        fib[i] = results[i];
    }
    return fib;
}

var service = {
    generate: generateFibonacci
};

module.exports = service;
