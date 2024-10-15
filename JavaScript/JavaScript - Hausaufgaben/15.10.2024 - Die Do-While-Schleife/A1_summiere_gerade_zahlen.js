function geradeSumme() {
    let sum = 0;
    let number = 1;
    do {
        if (number % 2 === 0) {
            sum += number;
        }
        number++;
    } while (number <= 100);
    return sum;
}

console.log(geradeSumme()); 