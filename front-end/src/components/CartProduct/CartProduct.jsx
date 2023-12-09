import { Price } from "../Price/Price";
import styles from "./CartProduct.module.css";

export function CartProduct({ product }) {
  const price = <Price product={product} />;

  return (
    <div className={styles.favouriteProduct}>
      <img src={product.photos[0]} width={85} height={140} />
      <div>
        <h3>
          {product.brand} {product.productName}
        </h3>
        <p className={styles.price}>
          Cena: <span>{price}</span>
        </p>
        <div className={styles.btnWrapper}>
          <button className={styles.delete}>Usuń</button>
        </div>
      </div>
      <p className={styles.rightPrice}>{price}</p>
    </div>
  );
}
