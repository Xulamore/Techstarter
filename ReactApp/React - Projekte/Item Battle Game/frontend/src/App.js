import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", type: "" });
  const [selectedItems, setSelectedItems] = useState({
    battle1: "",
    battle2: "",
  });
  const [battleResult, setBattleResult] = useState(null);
  const [tournamentResult, setTournamentResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Items laden
  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const response = await axios.get("http://localhost:4000/items");
      setItems(response.data);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  // Neues Item erstellen
  const createItem = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/items", newItem);
      setNewItem({ name: "", type: "" });
      loadItems();
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  // Level Up Item
  const levelUpItem = async (id) => {
    try {
      await axios.patch(`http://localhost:4000/items/${id}/levelup`);
      // Aktualisiere die Items-Liste nach dem Level-Up
      loadItems();
    } catch (error) {
      console.error("Error leveling up item:", error);
    }
  };

  // Battle starten
  const startBattle = async () => {
    try {
      const response = await axios.post("http://localhost:4000/battle", {
        item1Id: parseInt(selectedItems.battle1),
        item2Id: parseInt(selectedItems.battle2),
      });
      setBattleResult(response.data);
    } catch (error) {
      console.error("Error starting battle:", error);
    }
  };

// Turnier starten
const startTournament = async () => {
  try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:4000/tournament");
      
      // Lade zuerst die aktualisierten Items
      await loadItems();
      
      // Dann setze die Turnierergebnisse
      setTournamentResult(response.data);
      
  } catch (error) {
      console.error("Error starting tournament:", error);
  } finally {
      setIsLoading(false);
  }
};

 return (
    <div className="App">
      <h1>Item Battle Game</h1>

      {/* Formular für neue Items */}
      <div className="section-create">
        <h2>Neues Item erstellen</h2>
        <form onSubmit={createItem}>
          <input
            type="text"
            placeholder="Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Typ"
            value={newItem.type}
            onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
          />
          <button type="submit">Item erstellen</button>
        </form>
      </div>

      {/* Liste aller Items */}
      <div className="section">
        <h2>Verfügbare Items</h2>
        <div className="items-grid">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              <h3>{item.name}</h3>
              <p>Typ: {item.type}</p>
              <p>Power: {item.power}</p>
              <button
                onClick={() => levelUpItem(item.id)}
                className="level-up-button"
              >
                Level Up
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Kampfarena */}
      <div className="section battle-section">
        <h2>Kampfarena</h2>
        <div className="battle-selection">
          <select
            value={selectedItems.battle1}
            onChange={(e) =>
              setSelectedItems({ ...selectedItems, battle1: e.target.value })
            }
          >
            <option value="">Wähle Item 1</option>
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} (Power: {item.power})
              </option>
            ))}
          </select>
          <select
            value={selectedItems.battle2}
            onChange={(e) =>
              setSelectedItems({ ...selectedItems, battle2: e.target.value })
            }
          >
            <option value="">Wähle Item 2</option>
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} (Power: {item.power})
              </option>
            ))}
          </select>
          <button onClick={startBattle}>Kampf starten</button>
        </div>
        {battleResult && (
          <div className="battle-result">
            <h3>{battleResult.result}</h3>
            <p>{battleResult.description}</p>
          </div>
        )}
      </div>

      {/* Turnier */}
      <div className="section tournament-section">
        <h2>Turnier</h2>
        <div className="tournament-selection">
        <button 
    onClick={startTournament} 
    disabled={isLoading}
>
    {isLoading ? "Turnier läuft..." : "Turnier starten"}
</button>
        </div>
        {tournamentResult && (
          <div className="tournament-result">
            <h3>Turnierergebnisse:</h3>
            {tournamentResult.rounds?.map((round, roundIndex) => (
              <div key={roundIndex} className="tournament-round">
                <h4>Runde {roundIndex + 1}</h4>
                {round.map((match, matchIndex) => (
                  <div key={matchIndex} className="match">
                    <p>
                      <strong>{match.winner.name}</strong> besiegt {match.loser.name}
                    </p>
                    <p className="powers">
                      Power: {match.winner.power} vs {match.loser.power}
                    </p>
                  </div>
                ))}
              </div>
            ))}
            {tournamentResult.winner && (
              <h3 className="tournament-winner">
                Turniersieger: {tournamentResult.winner.name}
              </h3>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;