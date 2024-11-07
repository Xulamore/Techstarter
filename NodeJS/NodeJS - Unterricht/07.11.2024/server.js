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

// Kampfroute mit spannender Beschreibung
app.post('/battle', (req, res) => {
    const { id } = req.body;
    const playerItem = items.find(item => item.id === id);

    if (!playerItem) {
        return res.status(404).json({ message: 'Item not found' });
    }

    // Erstelle einen zufälligen Gegner
    const opponent = {
        name: 'Mighty Opponent',
        power: Math.floor(Math.random() * 41) + 10, // Zufällige Power zwischen 10 und 50
    };

    // Vergleiche die Power-Werte
    let result;
    let description;
    if (playerItem.power > opponent.power) {
        result = 'Player wins!';
        description = `Mit einem mächtigen Schlag besiegt dein ${playerItem.name} den ${opponent.name}. Der Kampfplatz bebt, als der Gegner zu Boden geht!`;
    } else if (playerItem.power < opponent.power) {
        result = 'Opponent wins!';
        description = `Der ${opponent.name} entfesselt eine unaufhaltsame Kraft und überwältigt dein ${playerItem.name}. Du siehst zu, wie dein Gegenstand in einer Wolke aus Staub verschwindet.`;
    } else {
        result = 'It\'s a tie!';
        description = `Ein epischer Schlagabtausch zwischen deinem ${playerItem.name} und dem ${opponent.name} endet in einem Unentschieden. Beide stehen sich keuchend gegenüber, bereit für die nächste Runde.`;
    }

    res.json({
        playerItem,
        opponent,
        result,
        description,
    });
});

// Turnier-Modus
app.post('/tournament', (req, res) => {
    const { itemIds } = req.body;
    if (!Array.isArray(itemIds) || itemIds.length !== 3) {
        return res.status(400).json({ message: 'Please select exactly three items' });
    }

    let wins = 0;
    const results = [];

    itemIds.forEach(id => {
        const playerItem = items.find(item => item.id === id);
        if (!playerItem) {
            results.push({ id, result: 'Item not found' });
            return;
        }

        const opponent = {
            name: 'Tournament Opponent',
            power: Math.floor(Math.random() * 41) + 10,
        };

        if (playerItem.power > opponent.power) {
            wins++;
            results.push({ id, result: 'Win' });
        } else if (playerItem.power < opponent.power) {
            results.push({ id, result: 'Loss' });
        } else {
            results.push({ id, result: 'Tie' });
        }
    });

    const tournamentResult = wins >= 2 ? 'Victory!' : 'Defeat!';
    res.json({ results, tournamentResult });
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});



