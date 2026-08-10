const fs = require("fs");

fs.readFile("./data.json", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file");
        return;
    }
    console.log("JSON File Data:");
    console.log(JSON.parse(data));
});


// JSON File Data:
// { name: 'Ragini Singh', course: 'B.Tech', subject: 'Node.js Assignment' }
