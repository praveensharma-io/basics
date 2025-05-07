// Create a counter in JavaScript
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second

let count = 0;

// Function to display and increment the counter
function updateCounter() {
    console.log(`Counter: ${count}`);
    count++;
}

// Initialize counter display
updateCounter();

// Set interval to update counter every second
const intervalId = setInterval(updateCounter, 1000);

// To stop the counter after a certain time (optional)
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Counter stopped");
}, 10000); // Runs for 10 seconds


