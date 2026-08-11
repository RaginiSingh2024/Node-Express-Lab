import express from 'express';
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.get('/about', (req, res) => {
    res.sendFile('about.html', { root: 'public' });
});

app.get('/contact', (req, res) => {
    res.sendFile('contact.html', { root: 'public' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}); 