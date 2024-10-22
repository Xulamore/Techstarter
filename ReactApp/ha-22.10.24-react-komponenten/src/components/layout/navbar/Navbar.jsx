import styles from "./Navbar.module.css";

const showAlert = () => {
  alert('Hallo von Home');
};

function Navbar() {
  return (
    <div className={styles.navbar}>
      <button className={styles.homebtn}
                onClick={showAlert}>Home</button>
    </div>
  );
}

export default Navbar;