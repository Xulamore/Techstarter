// Aufgabe 1
// 1. Erstellen Sie eine Map namens benutzerVerwaltung
let benutzerVerwaltung = new Map();

// 2. Fügen Sie mindestens drei Benutzer zur Map hinzu
benutzerVerwaltung.set('Xulamore', { email: 'jurij.warkentin@edu.techstarter.de', rolle: 'Admin' });
benutzerVerwaltung.set('Lokii', { email: 'lokii@gmail.com', rolle: 'User' });
benutzerVerwaltung.set('Odin', { email: 'odin@gmail.com', rolle: 'Gast' });

// 3. Erstellen Sie eine Funktion zeigeBenutzer
function zeigeBenutzer(benutzerMap) {
    benutzerMap.forEach((details, benutzername) => {
        console.log(`Benutzername: ${benutzername}, E-Mail: ${details.email}, Rolle: ${details.rolle}`);
    });
}

// Funktionstest
zeigeBenutzer(benutzerVerwaltung);

// Aufgabe 2
// 1. Erstellen Sie ein Set namens besuchteSeiten
let besuchteSeiten = new Set();

// 2. Fügen Sie mindestens fünf Seitennamen zum Set hinzu, wobei zwei Namen dupliziert sein sollten
besuchteSeiten.add('Startseite');
besuchteSeiten.add('Profil');
besuchteSeiten.add('Einstellungen');
besuchteSeiten.add('Startseite'); // Mein Duplikat Nr.1
besuchteSeiten.add('Profil'); // Mein Duplikat Nr.2
besuchteSeiten.add('Galerie');

// 3. Geben Sie die Anzahl der eindeutigen Seiten aus
console.log(`Anzahl der eindeutigen Seiten: ${besuchteSeiten.size}`); 

// 4. Schreiben Sie eine Funktion zeigeSeiten
function zeigeSeiten(seitenSet) {
    seitenSet.forEach(seite => {
        console.log(`Besuchte Seite: ${seite}`);
    });
}

// Funktionstest
zeigeSeiten(besuchteSeiten);