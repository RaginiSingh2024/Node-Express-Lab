const fs = require("fs");

function loadTasks() {
    return JSON.parse(fs.readFileSync("tasks.json", "utf8"));
}

function saveTasks(tasks) {
    fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
}

const command = process.argv[2];

if (command === "add") {
    const task = process.argv[3];
    const tasks = loadTasks();
    tasks.push({ task, completed: false });
    saveTasks(tasks);
    console.log("Task Added");
}

if (command === "list") {
    console.log(loadTasks());
}

if (command === "delete") {
    const index = process.argv[3];
    const tasks = loadTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    console.log("Task Deleted");
}


// Sample Output
// Add Task
// node todo.js add "Buy Milk"
// Task Added

// List Tasks
// [ { task: 'Buy Milk', completed: false } ]

// Delete Task
// node todo.js delete 0
// Task Deleted