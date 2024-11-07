import express from 'express';
import cors from 'cors';

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Datenarray für Items
let items = [];

// Middleware zur Validierung von Items
function validateItem(req, res, next) {
    const { name, type } = req.body;
    if (typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ message: 'Invalid name' });
    }
    if (typeof type !== 'string' || type.trim() === '') {
        return res.status(400).json({ message: 'Invalid type' });
    }
    next();
}

// GET Route für alle Items
app.get('/items', (req, res) => {
    res.json(items);
});

// POST Route zum Hinzufügen eines neuen Items mit Validierung
app.post('/items', validateItem, (req, res) => {
    const { name, type } = req.body;
    const newItem = {
        id: items.length + 1,
        name,
        type,
        power: Math.floor(Math.random() * 41) + 10, // Zufällige Power zwischen 10 und 50
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// PATCH Route zum Aufleveln eines Items
app.patch('/items/:id/levelup', (req, res) => {
    const { id } = req.params;
    const item = items.find(item => item.id === parseInt(id));

    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }

    const increase = Math.floor(Math.random() * 10) + 1;
    item.power += increase;

    res.json({ message: `Item leveled up by ${increase} points`, item });
});

// Heiltrank-Route
app.post('/items/heal', (req, res) => {
    const { id } = req.body;
    const item = items.find(item => item.id === id);

    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }

    if (item.type.toLowerCase() !== 'trank') {
        return res.status(400).json({ message: 'Item is not a potion' });
    }

    const healAmount = Math.floor(Math.random() * 20) + 10; // Heilt um 10 bis 30 Punkte
    item.health = (item.health || 0) + healAmount;

    res.json({ message: `Item healed by ${healAmount} points`, item });
});

// Kampfroute mit zwei Items
app.post('/battle', (req, res) => {
    const { item1Id, item2Id } = req.body;
    const item1 = items.find(item => item.id === item1Id);
    const item2 = items.find(item => item.id === item2Id);

    if (!item1 || !item2) {
        return res.status(404).json({ message: 'Item not found' });
    }

    let result;
    let description;
    
    if (item1.power > item2.power) {
        result = `${item1.name} gewinnt!`;
        description = `In einem epischen Kampf besiegt ${item1.name} (Power: ${item1.power}) 
                      den Gegner ${item2.name} (Power: ${item2.power})!`;
    } else if (item1.power < item2.power) {
        result = `${item2.name} gewinnt!`;
        description = `In einem spannenden Duell triumphiert ${item2.name} (Power: ${item2.power}) 
                      über ${item1.name} (Power: ${item1.power})!`;
    } else {
        result = 'Unentschieden!';
        description = `${item1.name} und ${item2.name} sind ebenbürtige Gegner 
                      mit jeweils ${item1.power} Kraftpunkten!`;
    }

    res.json({
        result,
        description,
        item1,
        item2
    });
});


// Turnier-Modus
app.post('/tournament', (req, res) => {
    const { itemIds } = req.body;
    if (!Array.isArray(itemIds) || itemIds.length !== 3) {
        return res.status(400).json({ message: 'Bitte wähle genau drei Items aus' });
    }

    const tournamentItems = itemIds.map(id => items.find(item => item.id === id))
                                 .filter(item => item !== undefined);

    if (tournamentItems.length !== 3) {
        return res.status(404).json({ message: 'Einige Items wurden nicht gefunden' });
    }

    const matches = [];
    const scores = new Map();
    tournamentItems.forEach(item => scores.set(item.name, 0));

    // Jeder gegen jeden
    for (let i = 0; i < tournamentItems.length; i++) {
        for (let j = i + 1; j < tournamentItems.length; j++) {
            const item1 = tournamentItems[i];
            const item2 = tournamentItems[j];
            
            let matchResult;
            if (item1.power > item2.power) {
                scores.set(item1.name, scores.get(item1.name) + 1);
                matchResult = `${item1.name} besiegt ${item2.name}`;
            } else if (item1.power < item2.power) {
                scores.set(item2.name, scores.get(item2.name) + 1);
                matchResult = `${item2.name} besiegt ${item1.name}`;
            } else {
                matchResult = `Unentschieden zwischen ${item1.name} und ${item2.name}`;
            }
            
            matches.push({
                match: `${item1.name} vs ${item2.name}`,
                result: matchResult,
                powers: `(${item1.power} vs ${item2.power})`
            });
        }
    }

    // Ermittle den Gesamtsieger
    let winner = '';
    let maxScore = -1;
    scores.forEach((score, itemName) => {
        if (score > maxScore) {
            maxScore = score;
            winner = itemName;
        }
    });

    res.json({
        matches,
        scores: Array.from(scores.entries()).map(([name, score]) => ({
            name,
            score
        })),
        winner: `${winner} ist Turniersieger mit ${maxScore} Siegen!`
    });
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});