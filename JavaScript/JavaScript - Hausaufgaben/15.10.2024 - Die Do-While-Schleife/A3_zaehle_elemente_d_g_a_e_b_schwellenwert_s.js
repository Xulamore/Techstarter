// for-Schleife
function zaehleGroesserAlsSchwelle(arr, threshold) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {
            count++;
        }
    }
    return count;
}

const data = [10, 23, 35, 47, 52, 66, 71, 88, 90];
console.log(zaehleGroesserAlsSchwelle(data, 50));

// while-Schleife
function zaehleMitWhileGroesserAlsSchwelle(arr, threshold) {
    let count = 0;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] > threshold) {
            count++;
        }
        i++;
    }
    return count;
}

console.log(zaehleMitWhileGroesserAlsSchwelle(data, 50));

// do-while-Schleife
function zaehleMitDoWhileGroesserAlsSchwelle(arr, threshold) {
    let count = 0;
    let i = 0;
    do {
        if (arr[i] > threshold) {
            count++;
        }
        i++;
    } while (i < arr.length);
    return count;
}

console.log(zaehleMitDoWhileGroesserAlsSchwelle(data, 50));