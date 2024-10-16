// Erstelle ein Array mit den Namen von fuenf verschiedenen Staedten
let staedteArray = ["Bielefeld", "Verl", "Oerlinghausen", "Koeln", "Sylt"];

// Iteriere ueber das Array und gib jede Stadt in Grossbuchstaben aus
staedteArray.forEach(stadt => {
    console.log(stadt.toUpperCase());
});

// Erstelle ein neues Array, das die Anzahl der Buchstaben in jedem Stadtnamen speichert
let buchstabenAnzahlArray = staedteArray.map(stadt => stadt.length);
console.log("Anzahl der Buchstaben in jedem Stadtnamen:", buchstabenAnzahlArray);