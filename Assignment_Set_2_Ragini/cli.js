// Q. Create a Node.js Command Line Tool that takes name & age as input and triggers a custom EventEmitter event. Print the received values.


const readline = require("readline");
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {
    rl.question("Enter your age: ", (age) => {
        emitter.emit("data", name, age);
        rl.close();
    });
});

emitter.on("data", (name, age) => {
    console.log(`\nUser Data:`);
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
});

// Sample Output
// Enter your name: Ragini
// Enter your age: 20

// User Data:
// Name: Ragini
// Age: 20
