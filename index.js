const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an instance of Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});