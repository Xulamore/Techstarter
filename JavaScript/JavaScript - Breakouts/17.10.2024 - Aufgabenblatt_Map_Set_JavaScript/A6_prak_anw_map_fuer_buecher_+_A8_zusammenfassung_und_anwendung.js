// 1. Erstellen Sie eine Map namens buecherMap
let buecherMap = new Map([
    ['Der Alchemist', { autor: 'Paulo Coelho', seiten: 198 }],
    ['1984', { autor: 'George Orwell', seiten: 328 }],
    ['Die Verwandlung', { autor: 'Franz Kafka', seiten: 74 }]
]);

// 2. Greifen Sie auf die Seitenanzahl des Buches 'Der Alchemist' zu und geben Sie sie aus
console.log(buecherMap.get('Der Alchemist').seiten); // Ausgabe: 198

// 3. Iterieren Sie über die buecherMap
buecherMap.forEach((details, titel) => {
    console.log(`Titel: ${titel}, Autor: ${details.autor}, Seiten: ${details.seiten}`);
});

// Aufgaben 8
// 1. Erstellen Sie eine Funktion namens zeigeBuecher
function zeigeBuecher(buecherMap) {
    buecherMap.forEach((details, titel) => {
        console.log(`Titel: ${titel}, Autor: ${details.autor}, Seiten: ${details.seiten}`);
    });
}

// 2. Testen Sie die Funktion mit der buecherMap aus Aufgabe 6
zeigeBuecher(buecherMap);