// server.js (Books CRUD API)
const express = require("express");
const app = express();
app.use(express.json());

let books = [];
let id = 1;

// CREATE
app.post("/books", (req, res) => {
    const newBook = { id: id++, ...req.body };
    books.push(newBook);
    res.json(newBook);
});

// READ ALL
app.get("/books", (req, res) => {
    res.json(books);
});

// READ ONE
app.get("/books/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    res.json(book);
});

// UPDATE
app.put("/books/:id", (req, res) => {
    const index = books.findIndex(b => b.id == req.params.id);
    books[index] = { id: Number(req.params.id), ...req.body };
    res.json(books[index]);
});

// DELETE
app.delete("/books/:id", (req, res) => {
    books = books.filter(b => b.id != req.params.id);
    res.json({ message: "Book deleted" });
});

app.listen(3000, () => console.log("Server running on port 3000"));


// Sample Output (Using Postman)

// POST → /books
// Request:
// {
//   "title": "JavaScript Guide",
//   "author": "Ragini"
// }


// Output:
// {
//   "id": 1,
//   "title": "JavaScript Guide",
//   "author": "Ragini"
// }

// GET → /books
// [
//   {
//     "id": 1,
//     "title": "JavaScript Guide",
//     "author": "Ragini"
//   }
// ]

// PUT → /books/1
// {
//   "id": 1,
//   "title": "Updated Book",
//   "author": "Ragini S"
// }

// DELETE → /books/1
// {
//   "message": "Book deleted"
// }