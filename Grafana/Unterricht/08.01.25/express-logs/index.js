const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'logs', 'access.log'),
  { flags: 'a' });

// Set up morgan to log requests in 'combined' format (common log format)
app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/error', (req, res) => {
  throw new Error('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});