import { CURRENCIES } from "../../constants/currencies";
import styles from "./CurrencySelector.module.css";

export function CurrencySelector() {
  return (
    <select className={styles.selector}>
      <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
  );
}
