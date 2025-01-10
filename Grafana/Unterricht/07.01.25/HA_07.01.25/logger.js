const winston = require('winston');

// Winston Logger Konfiguration
const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        // Konsolen-Output
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        }),
        // Datei-Output
        new winston.transports.File({ 
            filename: 'application.log',
            level: 'info'
        })
    ]
});

module.exports = logger;