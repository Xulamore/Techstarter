---
marp: true
title: "Hausaufgabe: Datenstrukturen Map und Set in JavaScript"
theme: default
paginate: true
---

# Hausaufgabe: Map und Set in JavaScript

## Ziel
- Anwenden der Kenntnisse über `Map` und `Set` aus der Unterrichtseinheit.
- Entwickeln einer kleinen Anwendung zur Verwaltung von Daten mit diesen Datenstrukturen.

---

# Aufgabe 1: Benutzerverwaltung mit `Map`
1. Erstellen Sie eine `Map` namens `benutzerVerwaltung`, die Benutzernamen als Schlüssel und Objekte als Werte speichert. Die Objekte sollen folgende Eigenschaften enthalten:
   - `email` (z.B. `'benutzer123@example.com'`)
   - `rolle` (z.B. `'Admin'`, `'User'` oder `'Gast'`)
2. Fügen Sie mindestens drei Benutzer zur `Map` hinzu.
3. Erstellen Sie eine Funktion `zeigeBenutzer`, die alle Benutzer und deren Details im Format `"Benutzername: E-Mail, Rolle"` ausgibt.

**Hinweis:** Nutzen Sie `.set()`, `.get()` und `.forEach()`.

---

# Aufgabe 2: Eindeutige Einträge mit `Set`
1. Erstellen Sie ein `Set` namens `besuchteSeiten`, um die Namen von Seiten zu speichern, die ein Benutzer besucht hat (z.B. `'Startseite'`, `'Profil'`, `'Einstellungen'`).
2. Fügen Sie mindestens fünf Seitennamen zum `Set` hinzu, wobei zwei Namen dupliziert sein sollten.
3. Geben Sie die Anzahl der eindeutigen Seiten aus.
4. Schreiben Sie eine Funktion `zeigeSeiten`, die alle Seitennamen im Format `"Besuchte Seite: [Name]"` ausgibt.

**Tipp:** Verwenden Sie `.add()`, `.has()`, und `.size`.

---

# Abgabe
- Stellen Sie sicher, dass alle Funktionen getestet und das gewünschte Ergebnis ausgeben.
- **Reichen Sie die Lösung als GitHub-Repository ein und teilen Sie einen direkten Link zu Ihrem Repository!**

**Viel Erfolg!** Nutzen Sie Ihr Wissen und die Folien, um die Aufgaben zu lösen.
