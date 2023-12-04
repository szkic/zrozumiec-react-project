import styles from "./CartSummary.module.css";
import CAR_IMAGE from "../../assets/car.svg";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";

export function CartSummary({ products }) {
  const deliveryCost = 49;
  const minSumForDelivery = 500;

  let sum = 0;
  products.forEach((product) => (sum += product.pricePLN));

  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div className={styles.paymentInfo}>
        <div>
          <p>Wartość produktów:</p>
          <p>{sum} zł</p>
        </div>
        <div>
          <p>Koszt dostawy:</p>
          <p>{sum > minSumForDelivery ? 0 : deliveryCost} zł</p>
        </div>
        <div>
          <p>Do zapłaty:</p>
          <p>{sum > minSumForDelivery ? sum : sum + deliveryCost} zł</p>
        </div>
      </div>
      <FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
      <div className={styles.delivery}>
        <img src={CAR_IMAGE} />
        <p>Darmowa dostawa od {minSumForDelivery} zł</p>
      </div>
    </div>
  );
}
