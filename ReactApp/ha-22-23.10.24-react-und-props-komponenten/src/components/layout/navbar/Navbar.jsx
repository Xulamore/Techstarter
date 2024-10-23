import StandardBtn from "../../common/standard-btn/StandardBtn";
import styles from "./Navbar.module.css";

function Navbar() {
  const btnTitel = "Galerie"
  return (
    <div className={styles.navbar}>
    <StandardBtn text="Home" />
    <StandardBtn text={btnTitel} />
    </div>
  );
}

export default Navbar; 