// console.log('hello from app.js');

// Using 'this' keyword inside an object
const trainer = {
  name: "Ragini",
  showName: function() {
    console.log(this.name); // 'this' refers to the trainer object
  }
};

// Call the function
trainer.showName();

// Using if/else condition
const score = 85;

if (score > 90) {
  console.log("Excellent");
} else if (score >= 75 && score <= 90) {
  console.log("Good job");
} else {
  console.log("Needs improvement");
}


// Create an array with 10 elements
const numbers = [1,2,3,4,5,6,7,8,9,10];

// Destructure first 2 elements into variables
// and the rest into another array using the rest operator (...)
const [first, second, ...rest] = numbers;

// Print the results
console.log("First number:", first);
console.log("Second number:", second);
console.log("Remaining numbers:", rest);

// Create first product object
const p1 = {
  id: 101,
  name: "Smartphone",
  brand: "Samsung",
  price: 25000
};

// Create second product using spread and add manufacturing name
const p2 = {
  ...p1,
  manufacturingName: "Samsung Electronics Ltd."
};

// Print both
console.log("Product 1:", p1);
console.log("Product 2:", p2);

// Example: try...catch with age check

try {
  let age = 16;  // change value to test

  if (age < 18) {
    // throw an error manually
    throw new Error("Age must be 18 or above!");
  }

  console.log("Access granted ");

} catch (error) {
  console.log(" Error caught!");
  console.log("Error message:", error.message);
}

// app.js
console.log("Hello From Node.js");
