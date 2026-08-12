// Assignment 3: Use Node built-in module 'fs'
// fs-demo.js
const fs = require('fs');

// Step 1: Read file synchronously
const dataSync = fs.readFileSync('input.txt', 'utf8');
console.log("Synchronous Read:", dataSync);

// Step 2: Read file asynchronously
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log("Asynchronous Read:", data);

  // Step 3: Rename file
  fs.rename('input.txt', 'data.txt', (err) => {
    if (err) throw err;
    console.log("File renamed to data.txt");
  });
});
