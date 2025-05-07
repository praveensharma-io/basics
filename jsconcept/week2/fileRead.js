// Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.

const fs = require('fs');
const path = require('path');

// Async file read
console.log(`${new Date().toISOString()} - Starting to read file`);

fs.readFile(path.join(__dirname, 'counterSetTimeout.js'), 'utf8', (err, data) => {
  if (err) {
    console.error(`${new Date().toISOString()} - Error reading file:`, err);
    return;
  }
  console.log(`${new Date().toISOString()} - File content:`);
  console.log(data);
  console.log(`${new Date().toISOString()} - Finished reading file`);
});

// Expensive operation - adjust the iterations to make it more expensive
console.log(`${new Date().toISOString()} - Starting expensive operation`);

const doExpensiveOperation = (iterations) => {
  let result = 0;
  for (let i = 0; i < iterations; i++) {
    // Doing some meaningless calculations to simulate CPU work
    result += Math.sin(i) * Math.cos(i);
  }
  return result;
};

// Try changing this number to see how it affects the execution order
const operationCost = 10000000; // 10 million iterations
const result = doExpensiveOperation(operationCost);

console.log(`${new Date().toISOString()} - Expensive operation completed with result: ${result}`);
console.log(`${new Date().toISOString()} - Program continues...`);

// This log will always appear last in synchronous code, but might appear
// before the file content if the file read takes longer than the expensive operation
console.log(`${new Date().toISOString()} - End of program`);