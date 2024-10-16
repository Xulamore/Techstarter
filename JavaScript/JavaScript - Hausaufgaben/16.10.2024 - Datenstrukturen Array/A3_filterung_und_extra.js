// Erstelle ein Array mit zufaelligen Zahlen zwischen 1 und 100 (mindestens 20 Zahlen)
let zufaelligeZahlen = Array.from({length: 20}, () => Math.floor(Math.random() * 100) + 1);

// Filtern Sie alle geraden Zahlen in einem neuen Array heraus
let geradeZahlen = zufaelligeZahlen.filter(zahl => zahl % 2 === 0);
console.log("Gerade Zahlen:", geradeZahlen);

// Berechne die Summe aller gefilterten geraden Zahlen
let summeGeradeZahlen = geradeZahlen.reduce((summe, zahl) => summe + zahl, 0);
console.log("Summe der geraden Zahlen:", summeGeradeZahlen);