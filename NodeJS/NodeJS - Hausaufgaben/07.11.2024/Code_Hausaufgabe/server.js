import express from 'express';
import cors from 'cors';

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Daten-Array
let items = [];

// GET-Route für Items
app.get('/items', (req, res) => {
    res.json(items);
});

// POST-Route zum Hinzufügen von Items
app.post('/items', (req, res) => {
    const { name, type } = req.body;
    const newItem = {
        id: items.length + 1,
        name,
        type,
        power: Math.floor(Math.random() * 41) + 10,
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// POST-Route für einen Kampf
app.post('/battle', (req, res) => {
    const { id } = req.body;
    const selectedItem = items.find(item => item.id === id);
    
    if (!selectedItem) {
        return res.status(404).json({ message: 'Gegenstand nicht gefunden' });
    }

    const opponent = {
        name: 'Dunkler Krieger',
        power: Math.floor(Math.random() * 41) + 10,
    };

    const result = selectedItem.power >= opponent.power ? 'Gewonnen!' : 'Verloren!';

    res.json({
        playerItem: selectedItem,
        opponent,
        result,
    });
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});