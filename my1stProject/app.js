// Import the Express module
const express = require('express');

// Import the CORS module to enable Cross-Origin Resource Sharing
const cors = require('cors');

// Create an instance of an Express application
const app = express();

// Define the port number on which the server will run
const port = 3000;


app.use(cors());

app.use(express.static('public'));

// Import the items data from a JSON file
const items = require('./data/items.json');


app.get('/api/items', (req, res) => {
    res.json(items);
});

// Start the server and listen on the defined port

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
