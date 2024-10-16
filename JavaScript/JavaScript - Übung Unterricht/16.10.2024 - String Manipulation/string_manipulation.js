
// String—Manipulationen
// 1. String-Verkettung mit "+"" Konkatenation
name1 = ("Ahmet");
greeting = ("Hallo");
console.log("Willkommen, " + name1);
console.log("Willkommen " + name1 + ", möchtest du " + greeting + " sagen?");

//  2. Template-Strings
// Backticks `....` erlauben das Einfügen von Variablen mit ${}
nachname1 = "Ünal";
gruss = `Willkommen Herr ${nachname1}`;
console.log(gruss);
zahl1 = 5;
zahl2 = 7;
ergebnis = (zahl1 + zahl2);
console.log(`Das Ergebnis ist ${ergebnis}`);
console.log("Das Ergebnis ist " + ergebnis);

// 3. String-Methoden
str1 = "       Hallo Kurs TEILNEHMER! ";
formattedStrL = str1.trim().toLowerCase(); // alles klein
console.log(formattedStrL);
formattedStrU = str1.trim().toUpperCase(); // alles groß
console.log(formattedStrU);

// 4. String-Interpolation in Funktionen
function mehrwertSteuerpreis(preis){
    const steuersatz = 0.19;
    gesammtpreis = preis * (1 + steuersatz);
    return `Der Gesamtpreis beträgt: €${gesammtpreis.toFixed(2)}`;
}
console.log(mehrwertSteuerpreis(899));

// 5. Verwendung von replace()
text = "Ich habe ein Haustier. Es ist ein Kater. Sein Name ist Gojo"
neuerText = text.replace("Gojo", "Baron");
console.log(neuerText);
