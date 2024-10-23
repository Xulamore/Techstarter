import styles from "./Content.module.css";
import CustomTextField from '../../common/custom-text-field/CustomTextField';

function Content() {
  return (
    <div className={styles.content}>
      <div>Hallo von der Startseite</div>
      <CustomTextField
        label="Gib deinen Text ein:"
        placeholder="Hier tippen..."
      />
    </div>
  );
}

export default Content;