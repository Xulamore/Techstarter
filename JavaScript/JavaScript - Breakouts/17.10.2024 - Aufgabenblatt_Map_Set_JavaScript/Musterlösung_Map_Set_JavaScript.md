---
marp: true
title: "Lösung: Datenstrukturen Map und Set in JavaScript"
theme: default
paginate: true
---

# Lösung: Datenstrukturen Map und Set in JavaScript


---

# Aufgabe 1: Wiederholung - Arrays

1. Erstellen Sie ein Array namens `autos`, das die Werte `'BMW'`, `'Audi'` und `'Mercedes'` enthält.
2. Greifen Sie auf das zweite Element zu und geben Sie es aus.
3. Fügen Sie das Auto `'Volkswagen'` hinzu und geben Sie das gesamte Array aus.
4. Iterieren Sie über das Array und geben Sie jedes Auto in Großbuchstaben aus.

```javascript
let autos = ['BMW', 'Audi', 'Mercedes'];
console.log(autos[1]); // Ausgabe: Audi
autos.push('Volkswagen');
console.log(autos); // Ausgabe: ['BMW', 'Audi', 'Mercedes', 'Volkswagen']

autos.forEach(auto => console.log(auto.toUpperCase()));
```

**Erklärung:** Das Array wird mit den angegebenen Werten erstellt, und wir nutzen `push()` zum Hinzufügen eines neuen Werts. Die `forEach()`-Methode iteriert über das Array.

---

# Aufgabe 2: Erste Schritte mit `Map`

1. Erstellen Sie eine `Map` namens `stadtMap`.
2. Fügen Sie folgende Paare hinzu:
   - `'Berlin'`: `'Deutschland'`
   - `'Paris'`: `'Frankreich'`
3. Greifen Sie auf den Wert des Schlüssels `'Berlin'` zu und geben Sie ihn aus.
4. Überprüfen Sie, ob der Schlüssel `'Rom'` in der Map existiert.

```javascript
let stadtMap = new Map();
stadtMap.set('Berlin', 'Deutschland');
stadtMap.set('Paris', 'Frankreich');
console.log(stadtMap.get('Berlin')); // Ausgabe: Deutschland
console.log(stadtMap.has('Rom')); // Ausgabe: false
```

**Erklärung:** Die `Map` wird erstellt und mit Werten befüllt. Mit `.get()` greifen wir auf einen Wert zu, und mit `.has()` überprüfen wir, ob ein Schlüssel existiert.

---

# Aufgabe 3: Iteration über `Map`

1. Erweitern Sie die `stadtMap` um `'Rom'`: `'Italien'`.
2. Iterieren Sie mit `.forEach()` und geben Sie jedes Paar im Format `"Stadt: Land"` aus.

```javascript
stadtMap.set('Rom', 'Italien');
stadtMap.forEach((land, stadt) => {
  console.log(`${stadt}: ${land}`);
});
```

**Erklärung:** `.forEach()` iteriert über die `Map` und gibt Schlüssel-Wert-Paare im angegebenen Format aus.

---

# Aufgabe 4: Erste Schritte mit `Set`

1. Erstellen Sie ein `Set` namens `buchstabenSet` und fügen Sie die Buchstaben `'A'`, `'B'` und `'C'` hinzu.
2. Überprüfen Sie, ob der Buchstabe `'D'` im Set existiert.
3. Fügen Sie den Buchstaben `'A'` erneut hinzu und geben Sie die Anzahl der Elemente im Set aus.

```javascript
let buchstabenSet = new Set(['A', 'B', 'C']);
console.log(buchstabenSet.has('D')); // Ausgabe: false
buchstabenSet.add('A');
console.log(buchstabenSet.size); // Ausgabe: 3
```

**Erklärung:** Sets speichern nur einzigartige Werte, daher bleibt die Anzahl bei drei, obwohl `'A'` erneut hinzugefügt wird.

---

# Aufgabe 5: Iteration über `Set`

1. Erstellen Sie ein `Set` namens `farbenSet` mit den Farben `'Gelb'`, `'Grün'` und `'Blau'`.
2. Iterieren Sie mit einer `for...of`-Schleife und geben Sie jede Farbe im Format `"Farbe: [Farbe]"` aus.

```javascript
let farbenSet = new Set(['Gelb', 'Grün', 'Blau']);
for (let farbe of farbenSet) {
  console.log(`Farbe: ${farbe}`);
}
```

**Erklärung:** Die `for...of`-Schleife ist ideal, um über die Werte eines `Sets` zu iterieren.

---

# Aufgabe 6: Praktische Anwendung - `Map` für Bücher

1. Erstellen Sie eine `Map` namens `buecherMap`, die Informationen über drei Bücher speichert (Titel als Schlüssel und Objekt mit Autor und Seitenanzahl als Wert).
   - Beispiel: `'Der Alchemist'`: `{autor: 'Paulo Coelho', seiten: 198}`
2. Greifen Sie auf die Seitenanzahl des Buches `'Der Alchemist'` zu und geben Sie sie aus.
3. Iterieren Sie über die `buecherMap` und geben Sie jedes Buch und seine Eigenschaften aus.

```javascript
let buecherMap = new Map();
buecherMap.set('Der Alchemist', {autor: 'Paulo Coelho', seiten: 198});
buecherMap.set('1984', {autor: 'George Orwell', seiten: 328});
buecherMap.set('Moby Dick', {autor: 'Herman Melville', seiten: 635});
console.log(buecherMap.get('Der Alchemist').seiten); // Ausgabe: 198
buecherMap.forEach((info, titel) => {
  console.log(`${titel}: Autor: ${info.autor}, Seiten: ${info.seiten}`);
});
```

---

# Aufgabe 7: Praktische Anwendung - `Set` für Sportarten

1. Erstellen Sie ein `Set` namens `sportartenSet`, das die Sportarten `'Fußball'`, `'Basketball'`, und `'Tennis'` enthält.
2. Überprüfen Sie die Anzahl der einzigartigen Sportarten im Set.
3. Entfernen Sie `'Basketball'` und geben Sie die aktualisierte Größe des Sets aus.

```javascript
let sportartenSet = new Set(['Fußball', 'Basketball', 'Tennis']);
console.log(sportartenSet.size); // Ausgabe: 3
sportartenSet.delete('Basketball');
console.log(sportartenSet.size); // Ausgabe: 2
```
**Erklärung:** Mit `.delete()` wird ein Element entfernt, und `.size` gibt die Anzahl der Elemente im Set aus.

---

# Aufgabe 8: Zusammenfassung und Anwendung

1. Erstellen Sie eine Funktion namens `zeigeBuecher`, die als Parameter eine `Map` von Büchern erhält und jedes Buch im Format `"Titel: Autor, Seiten"` ausgibt.
2. Testen Sie die Funktion mit der `buecherMap` aus Aufgabe 6.

```javascript
function zeigeBuecher(buecher) {
  buecher.forEach((info, titel) => {
    console.log(`${titel}: ${info.autor}, ${info.seiten} Seiten`);
  });
}

zeigeBuecher(buecherMap);
```

**Erklärung:** Die Funktion `zeigeBuecher` nimmt eine `Map` als Argument und iteriert darüber, um die Informationen strukturiert auszugeben.
