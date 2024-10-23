import styles from "./StandardBtn.module.css";

const showAlert = () => {
  alert('Hallo von Home');
};

function StandardBtn({ text }) {
  return <button className={styles.btnContainer}
                   onClick={showAlert}>{text}</button>;


}

export default StandardBtn; 