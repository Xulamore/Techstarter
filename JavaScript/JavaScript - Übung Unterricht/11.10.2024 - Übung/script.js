//Aufgabe 2. JavaScript einbinden
console.log('JavaScript läuft!');

//Aufgabe 3. Variablen und Datentypen
// Deklaration von Variablen mit verschiedenen Datentypen
let zahl = 42; // Zahl (Number)
const name = "Jury"; // Zeichenkette (String)
var istAktiv = true; // Boolean (Boolean)

// Ausgabe der Werte in der Konsole
console.log("Zahl:", zahl);
console.log("Name:", name);
console.log("Ist aktiv:", istAktiv);

// Deklaration von Variablen für verschiedene Datentypen

//Aufgabe 4. Datentypen
// Number
let zahl2 = 88; // Zahl (Number)

// String
const name2 = "Jury Warkentin"; // Zeichenkette (String)

// Boolean
var istAktiv2 = true; // Boolean (Boolean)

// Array
let farben = ["Rot", "Grün", "Blau"]; // Array

// Object
let person = {
    vorname: "Jury",
    nachname: "Warkentin",
    alter: 30
}; // Objekt

// Ausgabe der Werte in der Konsole
console.log("Zahl:", zahl2);
console.log("Name:", name);
console.log("Ist aktiv:", istAktiv2);
console.log("Farben:", farben);
console.log("Person:", person);

//Aufgabe 5. Operatoren
// Zwei verschiedene Zahlen definieren
let ersteZahl = 10;
let zweiteZahl = '10'; // Eine Zahl als String

// Vergleich mit dem == Operator (loser Vergleich)
let istGleichLoserVergleich = (ersteZahl == zweiteZahl);
console.log("Vergleich mit == : ", istGleichLoserVergleich); // true, da der Typ ignoriert wird

// Vergleich mit dem === Operator (strenger Vergleich)
let istGleichStrengerVergleich = (ersteZahl === zweiteZahl);
console.log("Vergleich mit === : ", istGleichStrengerVergleich); // false, da der Typ berücksichtigt wird

// Erklärung des Unterschieds
console.log("Unterschied zwischen == und ===:");
console.log("== vergleicht nur den Wert, während === sowohl den Wert als auch den Typ vergleicht.");

//Aufgabe 6. Bedingungen (If-Else)
// Punktzahl des Tests definieren
let punktzahl = 85; // Beispielpunktzahl

// Bedingung zur Bewertung der Punktzahl
if (punktzahl >= 90) {
    console.log("Ausgezeichnet");
} else if (punktzahl >= 75) {
    console.log("Gut gemacht");
} else {
    console.log("Mehr Übung erforderlich");
}

//Aufgabe 7. Schleifen
// For-Schleife: Zahlen von 1 bis 10 ausgeben
console.log("Zahlen von 1 bis 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// While-Schleife: Zahlen von 0 bis 5 ausgeben
console.log("Zahlen von 0 bis 5:");
let j = 0; // Initialisierung der Zählvariable
while (j <= 5) {
    console.log(j);
    j++; // Zählvariable erhöhen
}

//Aufgabe 8. Funktionen
// Funktion zur Begrüßung
function begruessung(name) {
    return `Hallo, ${name}! Willkommen!`;
}

// Testen der Funktion mit verschiedenen Namen
console.log(begruessung("Fitz")); // Ausgabe: Hallo, Fritz! Willkommen!
console.log(begruessung("Martin")); // Ausgabe: Hallo, Martin! Willkommen!
console.log(begruessung("Philipp")); // Ausgabe: Hallo, Philipp! Willkommen!

//Aufgabe 9. Arrays und Objekte
// Array mit Lieblingsfrüchten
let lieblingsfruechte = ["Äpfel", "Bananen", "Kirschen", "Trauben", "Mangos"];

// Zugriff auf den ersten Eintrag im Array
console.log("Die erste Lieblingsfrucht ist:", lieblingsfruechte[0]); // Ausgabe: Äpfel

// Objekt mit Informationen über eine Person
let person2 = {
    name: "Jury Warkentin",
    alter: 30,
    beruf: "Softwareentwickler"
};

// Ausgabe des Namens der Person
console.log("Der Name der Person ist:", person2.name); // Ausgabe: Max Mustermann

//Aufgabe 10. Konsloenausgabe
// Definiere eine Zahl
let zahlen = 15; // Beispielzahl

// Bedingung prüfen
if (zahlen > 10) {
    console.log("Die Zahl ist größer als 10."); // Nachricht in der Konsole ausgeben
} else {
    console.log("Die Zahl ist 10 oder kleiner."); // Alternative Nachricht
}