// Erstelle ein Array mit den Zahlen 1 bis 10
let zahlenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Fuege die Zahl 11 am Ende des Arrays hinzu
zahlenArray.push(11);

// Entferne die erste Zahl aus dem Array
zahlenArray.shift();

// Finde und gib die Position der Zahl 5 im Array aus
let positionVonFuenf = zahlenArray.indexOf(5);
console.log("Position der Zahl 5:", positionVonFuenf);

// Ueberpruefe, ob die Zahl 7 im Array enthalten ist
let enthaeltSieben = zahlenArray.includes(7);
console.log("Enthaelt das Array die Zahl 7?", enthaeltSieben);