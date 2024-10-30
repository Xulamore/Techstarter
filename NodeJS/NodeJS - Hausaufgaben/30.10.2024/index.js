// Pakete importieren
import catFacts from 'cat-facts';
import chalk from 'chalk';
import boxen from 'boxen';
import inquirer from 'inquirer';

// Funktion zur Anzeige eines Katzenfakts
function showCatFact() {
    const fact = catFacts.random(); // Zufälliger Katzenfakt
    console.log("Debug: Fact fetched - ", fact); // Debugging-Statement
    const factBox = boxen(chalk.green(fact), {
        padding: 1,
        margin: 1,
        borderStyle: 'double'
    });
    console.log(factBox); // Fakt in einer Box anzeigen
}

// Funktion zur Abfrage des Benutzernamens
async function askForUsername() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Wie ist dein Name?',
        },
    ]);
    return answers.username; // Benutzername zurückgeben
}

// Funktion für die Benutzerinteraktion
async function askForNewCatFact() {
    const answers = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'getFact',
            message: 'Möchtest du einen zufälligen Katzenfakt sehen?',
            default: true,
        },
    ]);

    if (answers.getFact) {
        showCatFact();
        console.log(chalk.yellow('Danke, dass du das Programm genutzt hast!'));
    } else {
        console.log(chalk.yellow('Danke, dass du das Programm genutzt hast!'));
        process.exit(0); // Programm beenden
    }
}

// Hauptfunktion
async function main() {
    const username = await askForUsername(); // Benutzername abfragen
    console.log(chalk.blue(`Willkommen, ${username}, zu deinem Katzenfakt-Tool!`));
    console.log('Jetzt hast du die Möglichkeit, dein Katzenfakt-Tool zu nutzen und gleichzeitig etwas über die verwendeten Module zu lernen. Viel Spaß beim Programmieren! Wenn du Fragen hast oder Hilfe benötigst, zögere nicht, nachzufragen!');
    await askForNewCatFact(); // Starte die Benutzerinteraktion
}

// Hauptfunktion aufrufen
main();