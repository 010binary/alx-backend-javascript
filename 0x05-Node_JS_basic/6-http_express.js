const express = require('express');

// Create an instance of Express
const app = express();

/**
 * Define the root route
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Set the server to listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
