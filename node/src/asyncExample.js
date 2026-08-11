// asyncExample.js

async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();

    console.log(" Data fetched successfully:");
    console.log(data);
  } catch (error) {
    console.error(" Error fetching data:", error);
  }
}

getData();
