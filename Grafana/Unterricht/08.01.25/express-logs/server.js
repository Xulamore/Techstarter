const express = require('express');
const logger = require('./logger'); // Der Logger, den wir erstellt haben

// Erstelle das Express-App
const app = express();
const port = 5000;

// Middleware, um Anfragen mit Winston zu loggen
app.use((req, res, next) => {
  logger.info(`Request: ${req.method} ${req.url}`);
  next();
});

// Route für die Startseite
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Route für absichtliche Fehler
app.get('/error', (req, res) => {
  throw new Error('Something went wrong!');
});

// Fehlerbehandlung
app.use((err, req, res, next) => {
  logger.error(`Error: ${err.message}`);
  res.status(500).send('Something went wrong!');
});

// Start des Servers
app.listen(port, () => {
  logger.info(`Server is running at http://localhost:${port}`);
});
