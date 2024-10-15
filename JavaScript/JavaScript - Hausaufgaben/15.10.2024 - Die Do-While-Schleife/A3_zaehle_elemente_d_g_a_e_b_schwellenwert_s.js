// for-Schleife
function zaehleGroesserAlsSchwelle(array, schwellenwert) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > schwellenwert) {
            count++;
        }
    }
    return count;
}

const wert = [10, 23, 35, 47, 52, 66, 71, 88, 90];
console.log(zaehleGroesserAlsSchwelle(wert, 50));

// while-Schleife
function zaehleMitWhileGroesserAlsSchwelle(array, schwellenwert) {
    let count = 0;
    let i = 0;
    while (i < array.length) {
        if (array[i] > schwellenwert) {
            count++;
        }
        i++;
    }
    return count;
}

console.log(zaehleMitWhileGroesserAlsSchwelle(wert, 50));

// do-while-Schleife
function zaehleMitDoWhileGroesserAlsSchwelle(array, schwellenwert) {
    let count = 0;
    let i = 0;
    do {
        if (array[i] > schwellenwert) {
            count++;
        }
        i++;
    } while (i < array.length);
    return count;
}

console.log(zaehleMitDoWhileGroesserAlsSchwelle(wert, 50));