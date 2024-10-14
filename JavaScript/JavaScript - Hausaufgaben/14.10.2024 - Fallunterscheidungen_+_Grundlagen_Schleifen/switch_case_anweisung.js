function interpretiereWetter() {
    const wetterlagen = ["Sonnig", "Regnerisch", "Schnee", "Windig"];
    const zufaelligeWetterlage = wetterlagen[Math.floor(Math.random() * wetterlagen.length)];
    console.log(`Die zufällige Wetterlage ist: ${zufaelligeWetterlage}`);

    switch (zufaelligeWetterlage) {
        case "Sonnig":
            return "Gehe spazieren";
        case "Regnerisch":
            return "Bleibe zu Hause und lese ein Buch";
        case "Schnee":
            return "Baue einen Schneemann";
        case "Windig":
            return "Fliege einen Drachen";
        default:
            return "Unbekannte Wetterlage";
    }
}

console.log(interpretiereWetter());