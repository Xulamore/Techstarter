/*  var und let: Mit beiden können Variablen deklariert werden.
    Einschatz hängt von der Verwendung im Gültigkeitsbereich = Scope ab.
    var: Ist innerhalb der Funktion sichtbar in der deklariert
    wird oder global wenn ausserhalb einer Funktion deklariert wird.
    let: Ist innerhalb eines Blocks { } gültig in der es deklariert wird. */
    
function calcSum(array){
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
const zahlenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ergebnisSum = calcSum(zahlenArray);
console.log("Die Summe betraegt: " + ergebnisSum);
