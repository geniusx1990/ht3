/* 1. Create a function called createCounter that returns a closure. 
The closure should be a counter function that increments the count on each call and returns the updated count. 
Each closure should have its own independent count.
 */

function createCounter() {
    let count = 0;
    const counter = () => {
        count++;
        return count;
    }

    return counter;
}


const test = createCounter();

console.log(test())
console.log(test())
console.log(test())

/* 2. Implement a higher-order function called repeatFunction that takes a function and a number as arguments. 
The function should return a new function that invokes the original function multiple times based on the provided number. 
If the number is negative, the new function should invoke the original function indefinitely until stopped.
 */

const repeatFunction = (fn, num) => {
    if (num < 0) {
      return () => {
        while (true) {
          fn();
        }
      };
    } else {
      return () => {
        for (let i = 0; i < num; i++) {
          fn();
        }
      };
    }
  };

  const printTest = () => console.log('Test');

  const printTestNumber = repeatFunction(printTest, 10);
  printTestNumber();
