const readline = require('readline');
const fs = require('fs').promises;

// Erstellt ein Interface fuer die Benutzereingabe
const rl = readline.createInterface({
    input: process.stdin,  // Legt fest, dass die Eingaben von der Standard-Eingabe (Konsole) kommen
    output: process.stdout // Legt fest, dass die Ausgaben zur Standard-Ausgabe (Konsole) gehen
});

// Definiert eine Funktion, um den Benutzer nach Eingaben zu fragen
function frageStellen(frage) {
    return new Promise((resolve) => rl.question(frage, resolve));
}

async function hauptfunktion() {
    try {
        // Fragt den Benutzer nach dem Dateinamen
        const dateiname = await frageStellen('Gib den Namen der Datei ein: ');

        // Fragt den Benutzer nach der Nachricht
        const nachricht = await frageStellen('Gib die Nachricht ein, die du hinzufuegen moechtest: ');

        // Schreibt die Nachricht in die Datei oder haengt sie an
        await fs.appendFile(dateiname, nachricht + '\n');
        console.log('Nachricht erfolgreich hinzugefuegt.');
    } catch (fehler) {
        console.error('Fehler beim Schreiben in die Datei:', fehler);
    } finally {
        rl.close(); // Schliesst die Schnittstelle
    }
}

// Ruft die Hauptfunktion auf
hauptfunktion();