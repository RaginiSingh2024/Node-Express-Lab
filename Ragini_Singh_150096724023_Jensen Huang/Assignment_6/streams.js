// Assignment 6: Demonstrate the usage of Streams in Node.js by creating a simple program that reads data from a file, processes it, and writes the output to another file.
// streams.js
const fs = require('fs');

// 1 Read a big file using stream
const readStream = fs.createReadStream('bigfile.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log(" Reading chunk of data...");
});

readStream.on('end', () => {
  console.log(" Finished reading bigfile.txt using stream.");
});

readStream.on('error', (err) => {
  console.error(" Error reading file:", err);
});

// 2️ Write to a file using stream
const writeStream = fs.createWriteStream('documentation.txt');
writeStream.write("This content is written using Node.js Write Stream.\n");
writeStream.write("Streams are efficient for handling large files.\n");
writeStream.write("They read/write data in chunks instead of loading everything in memory.\n");
writeStream.end();

writeStream.on('finish', () => {
  console.log(" Data successfully written to documentation.txt using stream.");
});

// Output
//  Reading chunk of data...
//  Reading chunk of data...
//  Finished reading bigfile.txt using stream.
//  Data successfully written to documentation.txt using stream.