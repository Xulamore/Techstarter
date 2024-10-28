const fs = require('fs');

const content = 'Den Text habe ich einfügen lassen';

fs.writeFile('beispielTextdatei.txt', content, 'utf8', err => {
    if(err) {
        console.error('Es gab einen Fehler beim Schreiben der Datei', err);
        return;
    }
    console.log('Datei wurde erfolgreich beschrieben');
})

fs.readFile('beispielTextdatei.txt', 'utf-8', (err, data) => {
    if(err) {
        console.error('Es gab einen Fehler beim lesen der Datei', err);
        return;
    }
    console.log(data);
})