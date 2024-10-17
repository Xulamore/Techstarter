// 1. Erstellen Sie ein Set namens buchstabenSet
let buchstabenSet = new Set(['A', 'B', 'C']);

// 2. Überprüfen Sie, ob der Buchstabe 'D' im Set existiert
console.log(buchstabenSet.has('D')); // Ausgabe: false

// 3. Fügen Sie den Buchstaben 'A' erneut hinzu und geben Sie die Anzahl der Elemente im Set aus
buchstabenSet.add('A');
console.log(buchstabenSet.size); // Ausgabe: 3