// Aufgabe 1
document.getElementById("welcome-text").textContent = "Herzlich Willkommen!";

// Aufgabe 2
document.getElementById("color-button").addEventListener("click", function() {
    this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

// Aufgabe 3
document.getElementsByTagName("li")[1].textContent = "Mango";

// Aufgabe 4
let newParagraph = document.createElement("p");
newParagraph.textContent = "Dies ist ein neuer Absatz";
document.getElementById("container").appendChild(newParagraph);

// Aufgabe 5
document.getElementById("click-button").addEventListener("click", function() {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "Button wurde geklickt!";
    this.parentNode.appendChild(newParagraph);
});

// Aufgabe 6
let box = document.querySelector(".box");
box.addEventListener("mouseover", function() {
    this.style.backgroundColor = "red";
});
box.addEventListener("mouseout", function() {
    this.style.backgroundColor = "grey";
});

// Aufgabe 7
document.getElementById("submit-button").addEventListener("click", function() {
    let inputValue = document.getElementById("user-input").value;
    let newParagraph = document.createElement("p");
    newParagraph.textContent = inputValue;
    this.parentNode.appendChild(newParagraph);
});

// Aufgabe 8
let boxes = document.getElementsByClassName("box");
for (let box of boxes) {
    box.addEventListener("click", function() {
        for (let b of boxes) {
            b.style.backgroundColor = "blue";
        }
    });
}

// Aufgabe 9
let newItem = document.createElement("li");
newItem.textContent = "Neues Item";
let list = document.getElementById("item-list");
list.insertBefore(newItem, list.firstChild);

// Aufgabe 10
document.getElementById("check-button").addEventListener("click", function() {
    let userGuess = parseInt(document.getElementById("guess-input").value);
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let resultText = userGuess === randomNumber ? "Richtig geraten!" : "Falsch geraten. Die Zahl war " + randomNumber;
    document.getElementById("result").textContent = resultText;
});