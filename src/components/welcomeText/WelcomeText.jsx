import styles from "./WelcomeText.module.css";

const WelcomeText = () => {
  return (
    <div className={styles.welcome}>
      <h1 className={styles.title}>Welcome to the ConnectGrid</h1>
      <p>Easily and quickly organize your contacts</p>
    </div>
  );
};

export default WelcomeText;
