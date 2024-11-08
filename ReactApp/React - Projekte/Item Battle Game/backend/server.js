import express from 'express';
import cors from 'cors';

const app = express();
const port = 4000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
}));
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
    const item1 = items.find(item => item.id === parseInt(item1Id));
    const item2 = items.find(item => item.id === parseInt(item2Id));

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

// Neue Turnier-Route
// Neue verbesserte Turnier-Route
app.post("/tournament", (req, res) => {
    if (items.length < 2) {
      return res.status(400).json({ error: "Nicht genug Items für ein Turnier" });
    }
  
    // Kopiere die Items für das Turnier
    let tournamentItems = [...items];
    let rounds = [];
    let winners = [];
    
    // Speichere die ursprünglichen Power-Werte
    let originalPowers = items.map(item => ({id: item.id, power: item.power}));
  
    while (tournamentItems.length > 1) {
      let roundMatches = [];
      let roundWinners = [];
  
      // Führe Matches durch, solange noch Items verfügbar sind
      while (tournamentItems.length >= 2) {
        let item1 = tournamentItems.shift();
        let item2 = tournamentItems.shift();
  
        // Bestimme den Gewinner
        let winner, loser;
        if (item1.power > item2.power) {
          winner = item1;
          loser = item2;
        } else if (item2.power > item1.power) {
          winner = item2;
          loser = item1;
        } else {
          // Bei Gleichstand zufällig entscheiden
          winner = Math.random() < 0.5 ? item1 : item2;
          loser = winner === item1 ? item2 : item1;
        }
  
        // Erhöhe die Power des Gewinners im Original-Array
        const originalItem = items.find(item => item.id === winner.id);
        if (originalItem) {
          originalItem.power += 1; // Erhöhe Power für jeden Sieg
        }
  
        roundWinners.push(winner);
        roundMatches.push({
          winner: { ...winner },
          loser: { ...loser }
        });
      }
  
      // Wenn ein ungepaartes Item übrig ist, kommt es automatisch weiter
      if (tournamentItems.length === 1) {
        roundWinners.push(tournamentItems.shift());
      }
  
      rounds.push(roundMatches);
      tournamentItems = roundWinners;
      winners = roundWinners;
    }
  
    // Bestimme den Gesamtsieger
    const winner = winners[0];
    
    // Bonus für den Turniersieger
    const finalWinner = items.find(item => item.id === winner.id);
    if (finalWinner) {
      finalWinner.power += 2; // Zusätzlicher Bonus für den Gesamtsieg
    }
  
    res.json({
      rounds: rounds,
      winner: winner
    });
  });

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});