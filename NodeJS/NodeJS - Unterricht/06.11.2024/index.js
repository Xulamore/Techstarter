// Importiere benötigte Module
import express from "express";
import cors from "cors";
const app = express();

// Middleware Setup
app.use(cors()); // Ermöglicht Cross-Origin Requests
app.use(express.json()); // Ermöglicht das Parsen von JSON-Daten im Request-Body

// Definiere den Port für den Server
const PORT = 5050;

// Initial todos Array mit Beispieldaten
const todos = [
  { id: 1, name: "Milch holen", userId: 1 },
  { id: 2, name: "Wasser holen", userId: 2 },
  { id: 3, name: "Brötchen holen", userId: 1 },
];

// Test-Route
app.get("/", function (req, res) {
  res.send("Hello my name is Tom");
});

// Route zum Abrufen aller Todos
app.get("/todos/all", (req, res) => {
  res.json(todos);
});

// Route zum Finden eines Todos anhand seiner ID
app.get("/todos/byid", (req, res) => {
  const todoId = req.query.todoId;
  console.log("MY TODOID", typeof todoId);
  if (!todoId) res.send("No Todo Id provided");
  const todoIdNr = parseInt(todoId); // Konvertiere String zu Number
  const todo = todos.find((item) => item.id === todoIdNr);
  res.json(todo);
});

// Route zum Finden aller Todos eines bestimmten Users
app.get("/todos/byuserid", (req, res) => {
  const userId = req.query.userId;

  if (!userId) res.send("No User Id provided");
  const userIdNr = parseInt(userId);
  const userTodos = todos.filter((item) => item.userId === userIdNr);
  res.json(userTodos);
});

// Route zum Suchen von Todos nach Namen
app.get("/todos/byname", (req, res) => {
  const searchName = req.query.name; // Hole Suchbegriff aus Query

  if (!searchName) {
    return res.json([]); // Wenn kein Name angegeben, leere Liste zurück
  }

  // Filtere Todos nach exaktem Namen
  const foundTodos = todos.filter(todo => todo.name === searchName);
  res.json(foundTodos);
});

// Route zum Erstellen neuer Todos
app.post("/todos", (req, res) => {
  const { name, userId } = req.body; // Hole Daten aus Request-Body

  // Validiere Pflichtfelder
  if (!name || !userId) {
    return res.status(400).send("Name and UserId are required");
  }

  // Generiere neue ID (höchste vorhandene ID + 1)
  const newId = Math.max(...todos.map(todo => todo.id)) + 1;

  // Erstelle neues Todo-Objekt
  const newTodo = {
    id: newId,
    name: name,
    userId: userId
  };

  todos.push(newTodo); // Füge zu Array hinzu
  res.status(201).json(newTodo); // Sende Bestätigung
});

// Route zum Löschen mehrerer Todos
app.delete("/todos", (req, res) => {
  // Konvertiere Query-Parameter zu Array (einzelne oder mehrere IDs)
  const todoIds = [].concat(req.query.todoId || []);

  // Prüfe ob IDs vorhanden
  if (todoIds.length === 0) {
    return res.status(400).send("No todo IDs provided");
  }

  // Konvertiere String-IDs zu Numbers
  const todoIdsNumbers = todoIds.map(id => parseInt(id));

  // Sammle zu löschende Todos
  const todosToDelete = [];
  
  // Prüfe Existenz aller IDs
  for (const id of todoIdsNumbers) {
    const todo = todos.find(t => t.id === id);
    if (!todo) {
      return res.status(404).send("Todo not found");
    }
    todosToDelete.push(todo);
  }

  // Lösche die gefundenen Todos
  todoIdsNumbers.forEach(id => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      todos.splice(index, 1); // Entferne Todo aus Array
    }
  });

  // Sende Bestätigung mit gelöschten Todos
  res.json({
    message: "Todos successfully deleted",
    deletedTodos: todosToDelete
  });
});

// NEU: Route zum Aktualisieren eines Todo-Namens
app.put("/todos/update", (req, res) => {
  // Hole todoId aus Query-Parametern und name aus Body
  const todoId = parseInt(req.query.todoId);
  const newName = req.body.name;

  // Validiere Eingaben
  if (!todoId) {
    return res.status(400).send("Todo ID is required");
  }
  if (!newName) {
    return res.status(400).send("New name is required");
  }

  // Finde Index des zu aktualisierenden Todos
  const todoIndex = todos.findIndex(todo => todo.id === todoId);

  // Prüfe ob Todo existiert
  if (todoIndex === -1) {
    return res.status(404).send("Todo not found");
  }

  // Aktualisiere den Namen des Todos
  todos[todoIndex].name = newName;

  // Sende das aktualisierte Todo zurück
  res.json({
    message: "Todo successfully updated",
    updatedTodo: todos[todoIndex]
  });
});

// Starte den Server
app.listen(PORT, () => {
  console.log(`Express App is running on http://localhost:${PORT}`);
});