import logo from './logo.svg';
import './App.css';

function App() {

  // Definiere eine Variable über dem return-Block, die z.B. den aktuellen Tag oder eine einfache Begrüßung enthält.
  const aussage = "Heute war ein sehr produktiver Tag!";

  // Berechnung für den H3-Tag
  const sum = 2024 - 37;

  const showAlert = () => {
    alert('Yey, du hast den Knopf angeklickt :D');
  };

  return (
    <>
      <h1 className="title">Willkommen zu meiner ersten React-App</h1>
      <h2 className="greeting">{aussage}</h2>
      <h3 className="calculation">Das Ergebnis der Berechnung 2024 - 37 ist: {sum}</h3>
      <button className="alert-button" onClick={showAlert}>
        Klick mich!
      </button>
    </>
  );
}

export default App;
