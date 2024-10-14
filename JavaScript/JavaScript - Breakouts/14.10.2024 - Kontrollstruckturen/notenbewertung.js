// Funktion, die eine zufällige Note zwischen 1 und 6 zurückgibt
function getGrade() {
    return Math.floor(Math.random() * 6) + 1;
}

// Funktion, die die Note bewertet und eine Rückmeldung gibt
function checkGrade() {
    const grade = getGrade();
    console.log(`Die zufällige Note ist: ${grade}`);

    // Bewertung mit switch-case
    switch (grade) {
        case 1:
            console.log("Sehr gut");
            break;
        case 2:
            console.log("Gut");
            break;
        case 3:
            console.log("Befriedigend");
            break;
        case 4:
            console.log("Ausreichend");
            break;
        case 5:
            console.log("Mangelhaft");
            break;
        case 6:
            console.log("Nicht bestanden");
            break;
        default:
            console.log("Ungültige Note");
    }

    // Bewertung mit if-else
    if (grade === 1) {
        console.log("Sehr gut");
    } else if (grade === 2) {
        console.log("Gut");
    } else if (grade === 3) {
        console.log("Befriedigend");
    } else if (grade === 4) {
        console.log("Ausreichend");
    } else if (grade === 5) {
        console.log("Mangelhaft");
    } else if (grade === 6) {
        console.log("Nicht bestanden");
    } else {
        console.log("Ungültige Note");
    }
}

// Aufruf der Funktion zur Demonstration
checkGrade();