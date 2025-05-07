const fs = require('fs');

const path = require('path');
const filePath = path.join(__dirname, './counter.js');

function cleanFile(filePath) {
  // Step 1: Read the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    // Step 2: Replace multiple spaces with single space & trim
    const cleaned = data.replace(/\s+/g, ' ').trim();

    // Step 3: Write the cleaned content back to the same file
    fs.writeFile(filePath, cleaned, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('File cleaned successfully.');
    });
  });
}

// Example usage
cleanFile(filePath);
