// /*
function bFm_forSchleife(n) {
    let fakultaet = 1;
    for (let i = 1; i <= n; i++) {
        fakultaet *= i;
    }
    return fakultaet;
}

console.log(bFm_forSchleife(5));
// */

// /*
function bFm_whileSchleife(n) {
    let fakultaet = 1;
    let i = 1;
    while (i <= n) {
        fakultaet *= i;
        i++;
    }
    return fakultaet;
}

console.log(bFm_whileSchleife(5)); 
// */

/*
Der Operator *= in JavaScript ist ein zusammengesetzter Zuweisungsoperator, der die Multiplikation und die Zuweisung in einem Schritt kombiniert. 
Er wird verwendet, um eine Variable mit einem Wert zu multiplizieren und das Ergebnis dieser Multiplikation der gleichen Variable zuzuweisen.

Erklärung:
x *= 3;: Dies multipliziert den aktuellen Wert von x (der 5 ist) mit 3 und weist das Ergebnis (15) wieder der Variablen x zu.
Der Ausdruck x *= 3; ist eine kürzere Schreibweise für x = x * 3;.
Dieser Operator ist nützlich, um den Code kompakter und lesbarer zu machen, insbesondere wenn dieselbe Variable mehrfach 
in einer Berechnung verwendet wird, wie es oft bei Schleifen der Fall ist, die Produkte oder Potenzen berechnen.
*/