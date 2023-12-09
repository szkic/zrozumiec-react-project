import styles from "./CartSummary.module.css";
import CAR_IMAGE from "../../assets/car.svg";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { CURRENCIES, CURRENCIES_SIGN } from "../../constants/currencies";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/currencyContext";

export function CartSummary({ products }) {
  const [currency] = useContext(CurrencyContext);

  const deliveryCosts = {
    [CURRENCIES.PLN]: 49,
    [CURRENCIES.USD]: 10,
  };
  const minSumsForDelivery = {
    [CURRENCIES.PLN]: 500,
    [CURRENCIES.USD]: 100,
  };

  const deliveryCost = deliveryCosts[currency];
  const minSumForDelivery = minSumsForDelivery[currency];
  const currencySign = CURRENCIES_SIGN[currency];

  let sum = 0;
  products.forEach(
    (product) =>
      (sum += currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD)
  );

  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div className={styles.paymentInfo}>
        <div>
          <p>Wartość produktów:</p>
          <p>
            {sum} {currencySign}
          </p>
        </div>
        <div>
          <p>Koszt dostawy:</p>
          <p>
            {sum > minSumForDelivery ? 0 : deliveryCost} {currencySign}
          </p>
        </div>
        <div>
          <p>Do zapłaty:</p>
          <p>
            {sum > minSumForDelivery ? sum : sum + deliveryCost} {currencySign}
          </p>
        </div>
      </div>
      <FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
      <div className={styles.delivery}>
        <img src={CAR_IMAGE} />
        <p>
          Darmowa dostawa od {minSumForDelivery} {currencySign}
        </p>
      </div>
    </div>
  );
}
