// 1. Erstellen Sie ein Array namens autos
let autos = ['BMW', 'Audi', 'Mercedes'];

// 2. Greifen Sie auf das zweite Element zu und geben Sie es aus
console.log(autos[1]); // Ausgabe: Audi

// 3. Fügen Sie das Auto 'Volkswagen' hinzu und geben Sie das gesamte Array aus
autos.push('Volkswagen');
console.log(autos); // Ausgabe: ['BMW', 'Audi', 'Mercedes', 'Volkswagen']

// 4. Iterieren Sie über das Array und geben Sie jedes Auto in Großbuchstaben aus
autos.forEach(auto => {
    console.log(auto.toUpperCase());
});