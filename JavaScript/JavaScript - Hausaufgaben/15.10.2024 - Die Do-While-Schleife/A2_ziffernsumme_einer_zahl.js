function zifferSumme(number) {
    let sum = 0;
    do {
        sum += number % 10;                                             // addiert die letzte Ziffer zur Summe
        number = Math.floor(number / 10);                               // entfernt die letzte Ziffer
    } while (number > 0);
    return sum;
}

console.log(zifferSumme(248));