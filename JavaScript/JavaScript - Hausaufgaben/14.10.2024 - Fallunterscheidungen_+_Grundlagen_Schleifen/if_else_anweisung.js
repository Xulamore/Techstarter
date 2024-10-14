function bestimmeKategorie() {
    const alter = Math.floor(Math.random() * 101);
    console.log(`Das zufällige Alter ist: ${alter}`);

    if (alter >= 0 && alter <= 12) {
        return "Kind";
    } else if (alter >= 13 && alter <= 17) {
        return "Jugendlicher";
    } else if (alter >= 18 && alter <= 64) {
        return "Erwachsener";
    } else if (alter >= 65) {
        return "Senior";
    } else {
        return "Ungültiges Alter";
    }
}

console.log(bestimmeKategorie());