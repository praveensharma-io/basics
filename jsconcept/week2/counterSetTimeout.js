// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count = 0;
let timeoutId = null;

function updateCounter() {
    console.log(`Counter: ${count}`);
    count++;
    
    // Schedule next update using setTimeout
    timeoutId = setTimeout(updateCounter, 1000);
}

// Function to stop the counter
function stopCounter() {
    clearTimeout(timeoutId);
    console.log("Counter stopped at:", count);
}

updateCounter();

// Example: Stop the counter after 5 seconds
setTimeout(stopCounter, 5000);

// Hint: You can use setTimeout recursively by calling setTimeout within the function itself