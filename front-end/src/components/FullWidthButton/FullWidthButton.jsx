import styles from "./FullWidthButton.module.css";

export function FullWidthButton({ children, onClick, isBlack }) {
  return (
    <button
      className={`${styles.button} ${isBlack ? styles.isBlack : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
