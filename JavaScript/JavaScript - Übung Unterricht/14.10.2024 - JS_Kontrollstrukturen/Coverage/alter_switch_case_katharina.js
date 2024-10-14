// function = leitet eine Funktion in JS ein
function getAge() {
    // floor = macht aus Kommazahlen Ganzezahlen in dem die Nachkommastellen gestrichen werden.
    // random = random ermittelt eine Zufallszahl zwischen Ø.Ø und 0.99 (1).
    return Math.floor(Math.random() * 100);
}

function checkAge() {
    // Holt sich den Wert aus der Funktion getAge()
    age = getAge();
    console.log('Dein Alter ist:' + age);

    switch (true) {
        case (age < 18):
            console.log("Du bist minderjährig!");
            break;
        case (age >= 18 && age <= 66):
            console.log("Du bist erwachsen!");
            break;
        default:
            console.log("Du bist im Rentenalter!");
    }

}

checkAge()