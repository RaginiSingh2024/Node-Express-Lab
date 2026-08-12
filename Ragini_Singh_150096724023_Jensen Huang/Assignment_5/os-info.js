// Assignment 5: Use Node built-in module 'os'

// os-info.js
const os = require('os');

console.log("Architecture:", os.arch());
console.log("Platform:", os.platform());
console.log("No. of CPU Cores:", os.cpus().length);
console.log("CPU Info:", os.cpus());
console.log("System Uptime (in seconds):", os.uptime());

// Example Output (in terminal)
// Architecture: arm64
// Platform: darwin
// No. of CPU Cores: 8
// CPU Info: [ { model: 'Apple M2', speed: 2400, times: [Object] }, ... ]
// System Uptime (in seconds): 52346

