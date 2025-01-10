const express = require("express");
const bodyParser = require("body-parser");
const logger = require('./logger');

const app = express();
const port = 5002;

app.use(bodyParser.json());

let buecher = [
    { id: 1, titel: "1984", autor: "George Orwell", erscheinungsjahr: 1949 },
    { id: 2, titel: "Schöne neue Welt", autor: "Aldous Huxley", erscheinungsjahr: 1932 },
    { id: 3, titel: "Fahrenheit 451", autor: "Ray Bradbury", erscheinungsjahr: 1953 }
];

// GET /buecher
app.get("/buecher", (req, res) => {
    logger.info('Bücherliste wurde abgerufen');
    res.json(buecher);
});

// POST /buecher
app.post("/buecher", (req, res) => {
    const { titel, autor, erscheinungsjahr } = req.body;
    if (!titel || !autor || !erscheinungsjahr) {
        logger.error('Fehlgeschlagener Versuch ein Buch zu erstellen: Fehlende Pflichtfelder');
        return res.status(400).json({ fehler: "Alle Felder sind erforderlich." });
    }
    const neuesBuch = { 
        id: buecher.length + 1, 
        titel, 
        autor, 
        erscheinungsjahr 
    };
    buecher.push(neuesBuch);
    logger.info(`Neues Buch erstellt: "${titel}" von ${autor}`);
    res.status(201).json(neuesBuch);
});

// GET /buecher/:id
app.get("/buecher/:id", (req, res) => {
    const buch = buecher.find(b => b.id === parseInt(req.params.id));
    if (!buch) {
        logger.warn(`Buch mit ID ${req.params.id} wurde nicht gefunden`);
        return res.status(404).json({ fehler: "Buch nicht gefunden" });
    }
    logger.info(`Buch mit ID ${req.params.id} wurde abgerufen`);
    res.json(buch);
});

// PUT /buecher/:id
app.put("/buecher/:id", (req, res) => {
    const buch = buecher.find(b => b.id === parseInt(req.params.id));
    if (!buch) {
        logger.warn(`Aktualisierung fehlgeschlagen: Buch mit ID ${req.params.id} nicht gefunden`);
        return res.status(404).json({ fehler: "Buch nicht gefunden" });
    }
    const { titel, autor, erscheinungsjahr } = req.body;
    
    const alterTitel = buch.titel;
    if (titel) buch.titel = titel;
    if (autor) buch.autor = autor;
    if (erscheinungsjahr) buch.erscheinungsjahr = erscheinungsjahr;
    
    logger.info(`Buch aktualisiert: "${alterTitel}" → "${buch.titel}"`);
    res.json(buch);
});

// DELETE /buecher/:id
app.delete("/buecher/:id", (req, res) => {
    const buchIndex = buecher.findIndex(b => b.id === parseInt(req.params.id));
    if (buchIndex === -1) {
        logger.warn(`Löschung fehlgeschlagen: Buch mit ID ${req.params.id} nicht gefunden`);
        return res.status(404).json({ fehler: "Buch nicht gefunden" });
    }
    const geloeschtesBuch = buecher[buchIndex];
    buecher.splice(buchIndex, 1);
    logger.info(`Buch gelöscht: "${geloeschtesBuch.titel}"`);
    res.status(204).send();
});

// Server starten
app.listen(port, () => {
    logger.info(`Bücher-API Server gestartet auf Port ${port}`);
});