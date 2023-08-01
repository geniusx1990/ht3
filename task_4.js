/* 1. Implement a recursive function called calculateFactorial that calculates the factorial of a given number. 
Optimize the function to use tail call optimization to avoid stack overflow for large input numbers.
 */

function calculateFactorial(number) {
    const TOC = (num, acc) => {
        if (num === 0) {
            return acc;
        }
        return TOC(num - 1, acc * num)
    }

    return TOC(number, 1);
}

console.log(calculateFactorial(2));
console.log(calculateFactorial(4));

/* 2. Create a recursive function called power that takes a base and an exponent as arguments. 
The function should calculate the power of the base to the exponent using recursion.
 */

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }

    return base * power(base, exponent - 1);
}

console.log(power(2, 5));