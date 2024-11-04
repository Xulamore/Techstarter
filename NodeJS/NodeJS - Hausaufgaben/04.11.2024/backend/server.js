import express from 'express';
import cors from 'cors';
import fs from 'fs';

const server = express();
const PORT = 4000;

// Middleware
server.use(cors());
server.use(express.json());

// Funktion zum Laden der Todos aus der JSON-Datei
const loadTodos = () => {
    try {
        const data = fs.readFileSync('todos.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Fehler beim Lesen der Datei:', err);
        return [];
    }
};

// Funktion zum Speichern der Todos in die JSON-Datei
const saveTodos = (todos) => {
    try {
        fs.writeFileSync('todos.json', JSON.stringify(todos, null, 2));
    } catch (err) {
        console.error('Fehler beim Schreiben der Datei:', err);
    }
};

server.get("/todos", (req, res) => {
    const todos = loadTodos();
    res.json(todos);
});

server.post("/todos", (req, res) => {
    const newTodo = req.body;
    const todos = loadTodos();

    // Füge eine neue ID hinzu
    newTodo.id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    todos.push(newTodo);

    saveTodos(todos);
    res.status(201).json(newTodo);
});

server.delete("/todos/:id", (req, res) => {
    const todos = loadTodos();
    const todoId = parseInt(req.params.id, 10);
    const updatedTodos = todos.filter(todo => todo.id !== todoId);

    if (todos.length === updatedTodos.length) {
        return res.status(404).json({ error: "Todo wurde nicht gefunden!" });
    }

    saveTodos(updatedTodos);
    res.status(200).json({ message: "Todo wurde erfolgreich gelöscht!" });
});

console.log("Server Online");
server.listen(PORT);