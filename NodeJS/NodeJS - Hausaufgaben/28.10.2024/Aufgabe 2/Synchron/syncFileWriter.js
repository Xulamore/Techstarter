const readlineSync = require('readline-sync');
const fs = require('fs');

// Fragt den Benutzer nach dem Dateinamen
const dateiname = readlineSync.question('Gib den Namen der Datei ein: ');

// Fragt den Benutzer nach der Nachricht
const nachricht = readlineSync.question('Gib die Nachricht ein, die du hinzufuegen moechtest: ');

// Schreibt die Nachricht in die Datei oder haengt sie an
try {
    fs.appendFileSync(dateiname, nachricht + '\n');
    console.log('Nachricht erfolgreich hinzugefuegt.');
} catch (fehler) {
    console.error('Fehler beim Schreiben in die Datei:', fehler);
}