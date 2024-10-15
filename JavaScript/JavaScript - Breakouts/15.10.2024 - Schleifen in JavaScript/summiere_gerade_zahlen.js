// /*
function summiereGeradeZahlen_mFS() {
    let summe = 0;
    for (let i = 2; i <= 100; i += 2) {
        summe += i;
    }
    return summe;
}

console.log(summiereGeradeZahlen_mFS()); 
// */

// /*
function summiereGeradeZahlen_mWS() {
    let summe = 0;
    let i = 2;
    while (i <= 100) {
        summe += i;
        i += 2;
    }
    return summe;
}

console.log(summiereGeradeZahlen_mWS()); 
// */

// Merkinfo an mich: Inkrement um 2: i += 2 bedeutet, dass wir in jedem Schleifendurchlauf i um 2 erhöhen. 