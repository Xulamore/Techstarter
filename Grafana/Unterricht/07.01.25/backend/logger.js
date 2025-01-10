const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;
const path = require('path');
const fs = require('fs');


const logDirectory = path.join(__dirname, 'logs');
if(!fs.existsSync(logDirectory)){ //...backend/Logs
    fs.mkdirSync(logDirectory);	// Ordner wird erstellt
}

const own_timestamp = timestamp({format: 'YYYY-MM-DD HH:mm:ss'})

const logFormat = printf(({ level, message, timestamp}) => {
    return `${timestamp} [${level}]: ${message}`
});

const logger = createLogger({
    // console.log console.warn console.error
    level: 'info', // mindesz-Level
    format: combine(
        own_timestamp,
        logFormat
    ),
    transports: [
        new transports.File({ filename: path.join(logDirectory, 'app.log')})
    ]
});

module.exports = logger;
// logger.info('Das ist eine Info');
// logger.warn('Das ist eine Warnung');
// logger.error('Das ist ein Fehler');