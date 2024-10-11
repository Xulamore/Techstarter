---
marp: true
theme: default
paginate: true
title: Einführung in JavaScript mit VS Code und HTML
---

# JavaScript in Visual Studio Code

## Was benötigen wir?

1. **Visual Studio Code** - Code Editor
2. **Browser** - Zum Ausführen des JavaScript-Codes über HTML

---

# Schritt 1: Erstellen eines neuen Projekts

1. Öffne Visual Studio Code
2. Erstelle ein neues Verzeichnis
3. Öffne dieses Verzeichnis in VS Code:
   - `Datei -> Ordner öffnen...`
4. Erstelle eine neue Datei `index.html`
5. Erstelle eine neue Datei `script.js`

---

# Schritt 2: Schreiben von JavaScript

- Öffne die Datei `script.js` in VS Code.
- Schreibe deinen ersten JavaScript-Code:

```javascript
console.log("Hallo, Welt!");
```

---

# Schritt 3: Einbinden von JavaScript in HTML

- Öffne die Datei index.html.
- Füge das JavaScript ein, indem du die Datei `script.js` im `<script>-Tag` verlinkst:
``` html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Beispiel</title>
</head>
<body>
  <h1>Hallo, Welt!</h1>
  <script src="script.js"></script>
</body>
</html>
```

---

# Schritt 4: JavaScript im Browser ausführen

1. Speichere beide Dateien (`index.html` und `script.js`).
2. Öffne die Datei `index.html` in deinem Browser (Rechtsklick -> "Open with Live Server").
3. Öffne die Entwicklerkonsole im Browser:
Rechtsklick -> "Untersuchen" -> Reiter "Konsole".
4. Du solltest die Ausgabe "Hallo, Welt!" in der Konsole sehen.
