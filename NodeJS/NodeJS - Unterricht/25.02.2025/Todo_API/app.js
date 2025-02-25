// app.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'todos.json');

// Middleware
app.use(bodyParser.json());

// Hilfsfunktion zum Laden der Todos aus der JSON-Datei
async function loadTodos() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // Wenn die Datei nicht existiert oder fehlerhaft ist, erstelle eine neue mit Standardwerten
    const initialTodos = [
      { id: 1, title: 'Express API lernen', completed: false },
      { id: 2, title: 'Node.js Projekt erstellen', completed: true }
    ];
    
    await saveTodos(initialTodos);
    return initialTodos;
  }
}

// Hilfsfunktion zum Speichern der Todos in der JSON-Datei
async function saveTodos(todos) {
  await fs.writeFile(DATA_FILE, JSON.stringify(todos, null, 2), 'utf8');
}

// Hilfsfunktion zum Finden des nächsten ID-Werts
function getNextId(todos) {
  const maxId = todos.reduce((max, todo) => (todo.id > max ? todo.id : max), 0);
  return maxId + 1;
}

// API Endpunkte

// 1. GET /api/todos - Alle Todos abrufen
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await loadTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Fehler beim Laden der Todos' });
  }
});

// 2. POST /api/todos - Neues Todo erstellen
app.post('/api/todos', async (req, res) => {
  try {
    const { title } = req.body;
    
    if (!title) {
      return res.status(400).json({ error: 'Title ist erforderlich' });
    }
    
    const todos = await loadTodos();
    
    const newTodo = {
      id: getNextId(todos),
      title,
      completed: false
    };
    
    todos.push(newTodo);
    await saveTodos(todos);
    
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: 'Fehler beim Erstellen des Todos' });
  }
});

// 3. PUT /api/todos/:id - Todo aktualisieren
app.put('/api/todos/:id', async (req, res) => {
  try {
    const todoId = parseInt(req.params.id);
    const { title, completed } = req.body;
    
    const todos = await loadTodos();
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    
    if (todoIndex === -1) {
      return res.status(404).json({ error: 'Todo nicht gefunden' });
    }
    
    todos[todoIndex] = {
      ...todos[todoIndex],
      title: title !== undefined ? title : todos[todoIndex].title,
      completed: completed !== undefined ? completed : todos[todoIndex].completed
    };
    
    await saveTodos(todos);
    res.json(todos[todoIndex]);
  } catch (error) {
    res.status(500).json({ error: 'Fehler beim Aktualisieren des Todos' });
  }
});

// 4. DELETE /api/todos/:id - Todo löschen (zusätzlicher Endpunkt)
app.delete('/api/todos/:id', async (req, res) => {
  try {
    const todoId = parseInt(req.params.id);
    
    const todos = await loadTodos();
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    
    if (todoIndex === -1) {
      return res.status(404).json({ error: 'Todo nicht gefunden' });
    }
    
    const deletedTodo = todos[todoIndex];
    todos.splice(todoIndex, 1);
    
    await saveTodos(todos);
    res.json(deletedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Fehler beim Löschen des Todos' });
  }
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});