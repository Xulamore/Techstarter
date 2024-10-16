// Erstelle ein 2D-Array, das eine 3x3-Matrix repräsentiert, die mit den Zahlen 1 bis 9 gefüllt ist.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Schreibe eine Funktion, die die Diagonalsumme der Matrix (von oben links nach unten rechts) berechnet.
function berechneDiagonalsumme(matrix) {
    let diagonalsumme = 0;
    for (let i = 0; i < matrix.length; i++) {
        diagonalsumme += matrix[i][i];
    }
    return diagonalsumme;
}

let diagonalsumme = berechneDiagonalsumme(matrix);
console.log("Diagonalsumme:", diagonalsumme);

// Verwandle die Matrix in eine 3x3 Matrix mit Nullen in den Ecken.
function transformiereMatrix(matrix) {
    let groesse = matrix.length;
    matrix[0][0] = 0; // Oben links
    matrix[0][groesse - 1] = 0; // Oben rechts
    matrix[groesse - 1][0] = 0; // Unten links
    matrix[groesse - 1][groesse - 1] = 0; // Unten rechts
    return matrix;
}

let transformierteMatrix = transformiereMatrix(matrix);
console.log("Transformierte Matrix mit Nullen in den Ecken:");
console.log(transformierteMatrix);