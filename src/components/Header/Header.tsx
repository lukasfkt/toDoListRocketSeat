import styles from "./Header.module.css";
import rocketIcon from "../../assets/rocket.svg";

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.todoContainer}>
        <img src={rocketIcon} alt="Logotipo do desafio" />
        <span>to</span>
        <span>do</span>
      </div>
    </div>
  );
}
