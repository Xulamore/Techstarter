// Pakete importieren
import inspirationalQuotes from 'inspirational-quotes';
import inquirer from 'inquirer';
import boxen from 'boxen';
import chalk from 'chalk';

// Funktion zur Anzeige eines inspirierenden Zitats
function showInspirationalQuote() {
    const quote = inspirationalQuotes.getQuote(); // Fülle dies aus!
    console.log("Debug: Quote fetched - ", quote); // Debugging-Statement
    const quoteBox = boxen(chalk.green(quote.text), {
        padding: 1,
        margin: 1,
        borderStyle: 'double'
    });
    console.log(quoteBox); // Zitat in einer Box anzeigen
}
// Funktion für die Benutzerinteraktion
async function askForNewQuote() {
    const answers = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'getQuote',
            message: 'Möchtest du ein inspirierendes Zitat sehen?',
            default: true,
        },
    ]);

    if (answers.getQuote) {
        showInspirationalQuote();
        console.log(chalk.yellow('Danke, dass du das Programm genutzt hast!'));
    } else {
        console.log(chalk.yellow('Danke, dass du das Programm genutzt hast!'));
        process.exit(0); // Programm beenden
    }
}

// Hauptfunktion
async function main() {
    console.log(chalk.blue('Willkommen zu deinem inspirierenden Zitat-Tool!'));
    console.log('Jetzt hast du die Möglichkeit, dein inspirierendes Zitat-Tool zu erstellen und gleichzeitig etwas über die verwendeten Module zu lernen. Viel Spaß beim Programmieren! Wenn du Fragen hast oder Hilfe benötigst, zögere nicht, nachzufragen!');
    await askForNewQuote(); // Starte die Benutzerinteraktion
}

// Hauptfunktion aufrufen
main();