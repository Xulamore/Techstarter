// Funktion, die eine zufällige Temperatur zwischen -20 und 40 Grad Celsius zurückgibt
function getTemperature() {
    return Math.floor(Math.random() * 61) - 20;
}

// Funktion, die die Temperatur bewertet und eine Rückmeldung gibt
function checkTemperature() {
    const temperature = getTemperature();
    console.log(`Die zufällige Temperatur ist: ${temperature}°C`);

    // Bewertung mit if-else
    if (temperature < 0) {
        console.log("Es ist sehr kalt");
    } else if (temperature >= 0 && temperature <= 15) {
        console.log("Es ist kühl");
    } else if (temperature >= 16 && temperature <= 25) {
        console.log("Es ist angenehm warm");
    } else if (temperature > 25) {
        console.log("Es ist heiß");
    }
/*
    // Bewertung mit switch-case
    switch (true) {
        case (temperature < 0):
            console.log("Es ist sehr kalt");
            break;
        case (temperature >= 0 && temperature <= 15):
            console.log("Es ist kühl");
            break;
        case (temperature >= 16 && temperature <= 25):
            console.log("Es ist angenehm warm");
            break;
        case (temperature > 25):
            console.log("Es ist heiß");
            break;
        default:
            console.log("Ungültige Temperatur");
    }
*/            
}

// Aufruf der Funktion zur Demonstration
checkTemperature();