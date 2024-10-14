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

    if (age < 18) {
        console.log("Du bist minderjährig!")
    } else {
        console.log("Du bist volljährig!")
    } 
}

//if (age < 18) {
//    console.log ("bist minderjaehrig!")
//    } else if (age >= 67){
//    console.log ("Du bist im Rentenalter!")
//    } else {
//    console.log("bist erwachsen!")
//   }

//}

//Funktionsaufruf (Hiermit sehe die console.log-Befehle im Terminal!)
checkAge() ;