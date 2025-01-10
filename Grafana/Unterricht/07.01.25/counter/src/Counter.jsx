import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Counter() {  // Geändert von App zu Counter
  const [count, setCount] = useState(0);  // Geändert von React.useState zu useState

  let incrementCount = () => {
    console.log("Inkrementiere Zähler");
    setCount(count + 1);
    console.warn(`Neuer Zählerwert: ${count + 1}`);
  };

  let decrementCount = () => {
    console.log("Versuche, Zähler zu dekrementieren");
    console.log(`Aktueller Zählerwert: ${count}`);
    if (count === 0) {
      console.error("Zählerwert ist bereits 0. Decrementieren ist nicht möglich.");
      toast.warn('Zählerwert ist bereits 0', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    setCount(count - 1);
    console.log(`Neuer Zählerwert: ${count - 1}`);
  };

  const containerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  };

  const buttonStyle = {
    margin: '0 5px',
    padding: '8px 16px',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <div>
        <div>
          <h1 data-testid="counter-text">Count: {count}</h1>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button
            style={buttonStyle}
            data-testid="decrease"
            title={"-"}
            onClick={decrementCount}
          >-</button>
          <button
            style={buttonStyle}
            data-testid="increase"
            title={"+"}
            onClick={incrementCount}
          >+</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Counter;