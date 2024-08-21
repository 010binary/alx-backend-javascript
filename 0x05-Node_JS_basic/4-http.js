const http = require('http');

/**
 * Create an HTTP server that listens on port 1245
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
