function getTodos() {
    fetch('http://127.0.0.1:4000/todos')
    .then(response => response.json())
    .then(json => loadTodos(json));
}

function loadTodos(todos) {
    console.log(todos);

    for (let i = 0; i < todos.length; i++) {
        taskToHtml(todos[i]);
    }
}

function taskToHtml(todo) {
    const todoList = document.getElementById('todo-list');
    const todoItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => toggleTodoCompletion(todo.id, checkbox.checked));

    const label = document.createElement('span');
    label.textContent = todo.title;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Löschen';
    deleteButton.addEventListener('click', () => deleteTask(todo.id, todoItem));

    todoItem.appendChild(checkbox);
    todoItem.appendChild(label);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
}

function addTask() {
    let taskContent = document.getElementById('userInput').value;
    document.getElementById('userInput').value = '';

    const fetchConfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "title": taskContent,
            "completed": false
        })
    };

    fetch('http://127.0.0.1:4000/todos', fetchConfig)
    .then(response => response.json())
    .then(json => {
        taskToHtml(json);
    })
    .catch(error => console.error('Fehler beim Hinzufügen der Aufgabe:', error));
}

function toggleTodoCompletion(id, completed) {
    fetch(`http://127.0.0.1:4000/todos/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed })
    })
    .catch(error => console.error('Fehler beim Aktualisieren der Aufgabe:', error));
}

function deleteTask(id, todoItem) {
    fetch(`http://127.0.0.1:4000/todos/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            todoItem.remove();
        } else {
            console.error('Fehler beim Löschen der Aufgabe');
        }
    })
    .catch(error => console.error('Fehler beim Löschen der Aufgabe:', error));
}

document.getElementById('add-task').addEventListener("click", addTask);

getTodos();