import { useFetcher } from "react-router-dom";
import styles from "./FavouriteProduct.module.css";
import { Price } from "../Price/Price";

export function FavouriteProduct({ favourite }) {
  const { Form } = useFetcher();
  const product = favourite.product;

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
          <Form
            method="DELETE"
            action={`/delete-from-favourites/${favourite.id}`}
          >
            <button className={styles.delete}>Usuń</button>
          </Form>
          <button className={styles.add}>Dodaj do koszyka</button>
        </div>
      </div>
      <p className={styles.rightPrice}>{price}</p>
    </div>
  );
}
