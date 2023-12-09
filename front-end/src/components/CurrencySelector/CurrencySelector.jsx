import { useContext } from "react";
import { CURRENCIES } from "../../constants/currencies";
import styles from "./CurrencySelector.module.css";
import { CurrencyContext } from "../../contexts/currencyContext";

export function CurrencySelector() {
  const [currency, setCurrency] = useContext(CurrencyContext);

  return (
    <select
      value={currency}
      className={styles.selector}
      onChange={(e) => setCurrency(e.currentTarget.value)}
    >
      <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
  );
}
