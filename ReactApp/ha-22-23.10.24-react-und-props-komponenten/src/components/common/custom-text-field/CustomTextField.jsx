import styles from './CustomTextField.module.css';

function CustomTextField({ label, placeholder, onChange }) {
  return (
    <div className={styles.textFieldContainer}>
      <label className={styles.label}>{label}</label>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default CustomTextField;