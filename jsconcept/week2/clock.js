// Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)

// HH:MM::SS AM/PM (Eg 01:45:23 PM)

function updateClock() {
    const now = new Date();
    
    // Get hours, minutes, seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Format for 24-hour time (HH:MM:SS)
    const time24 = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Format for 12-hour time (HH:MM:SS AM/PM)
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12; // Convert 0 to 12 for 12 AM
    const time12 = `${hours12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${period}`;
    
    console.clear()
    console.log('--------------------------------');
    console.log(`24-hour format: ${time24}`);
    console.log(`12-hour format: ${time12}`);
    console.log('--------------------------------');
}

// Update clock immediately 
updateClock();

// Set interval to update the clock every second
const clockInterval = setInterval(updateClock, 1000);

// Optional: To stop the clock after some time
// setTimeout(() => {
//     clearInterval(clockInterval);
//     console.log("Clock stopped");
// }, 60000); // Runs for 60 seconds

