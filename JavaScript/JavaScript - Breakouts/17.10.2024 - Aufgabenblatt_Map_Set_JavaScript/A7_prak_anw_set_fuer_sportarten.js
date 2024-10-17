// 1. Erstellen Sie ein Set namens sportartenSet
let sportartenSet = new Set(['Fußball', 'Basketball', 'Tennis']);

// 2. Überprüfen Sie die Anzahl der einzigartigen Sportarten im Set
console.log(sportartenSet.size); // Ausgabe: 3

// 3. Entfernen Sie 'Basketball' und geben Sie die aktualisierte Größe des Sets aus
sportartenSet.delete('Basketball');
console.log(sportartenSet.size); // Ausgabe: 2