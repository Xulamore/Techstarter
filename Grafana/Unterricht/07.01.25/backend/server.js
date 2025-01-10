const express = require('express');
const app = express();
const logger = require('./logger');

const port = 5001;

app.get('/', (req, res) =>{
    res.send('Hello World');
    console.log("Wurzel Route aufgerufen");
    logger.info('Wurzel Route aufgerufen');
});

app.listen(port, () => {
    console.log(`Server läuft auf ${port}`);
    logger.info(`Server läuft auf ${port}`);
});