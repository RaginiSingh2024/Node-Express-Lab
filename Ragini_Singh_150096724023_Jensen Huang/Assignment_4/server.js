// Assignment 4: Create an HTTP server running on port 3000

// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello World");
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


// Output (in terminal)
// Server running on http://localhost:3000


// Output (in browser)
// When you visit http://localhost:3000
// Hello World

