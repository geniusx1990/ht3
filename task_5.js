/* 1. Implement a lazy evaluation function called lazyMap that takes an array and a mapping function. 
The function should return a lazy generator that applies the mapping function to each element of the array one at a time.
 */


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function lazyMap(array, fn) {
    let i = 0;
    return () => {
        const item = fn(array[i]);
        i++;
        return item;

    };

}

const test = lazyMap(arr, (item) => item + 100);
console.log(test())
console.log(test())
console.log(test())
console.log(test())
console.log(test())
console.log(test())
console.log(test())
console.log(test())

console.log('\n', 'task2',' \n' )


/* 2. Create a lazy generator function called fibonacciGenerator that generates 
Fibonacci numbers one at a time using lazy evaluation.
 */

function fibonacciGenerator() {
    let prev = 0;
    let currecnt = 1;
    return () => {
        const fib = currecnt;
        [prev, currecnt] = [currecnt, prev + currecnt];
        return fib;
    }
}

const testTask2 = fibonacciGenerator();

console.log(testTask2());
console.log(testTask2());
console.log(testTask2());
console.log(testTask2());
console.log(testTask2());
console.log(testTask2());
console.log(testTask2());
console.log(testTask2());