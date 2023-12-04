import styles from "./CartProductsList.module.css";
import { CartProduct } from "../CartProduct/CartProduct";

export function CartProductsList({ products }) {
  return (
    <div className={styles.favouritesListContainer}>
      <h2>Ulubione</h2>
      <div>
        {products.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
