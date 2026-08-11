// The 'events' module in Node.js is a built-in module 
// that allows you to work with event-driven programming.
// Here's a simple example to demonstrate how the events module works:

import { EventEmitter } from 'events';

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define an event listener for the 'greet' event
eventEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}! Welcome to Node.js events.`);
});

// Trigger (emit) the 'greet' event
eventEmitter.emit('greet', 'Alice');

// Define another event listener for the 'farewell' event
eventEmitter.on('farewell', (name) => {
  console.log(`Goodbye, ${name}. See you soon!`);
});

// Trigger (emit) the 'farewell' event
eventEmitter.emit('farewell', 'Bob');

//Triger the 'farewell' event 
eventEmitter.emit('farewell', 'Charlie');

