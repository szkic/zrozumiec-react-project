import styles from "./FavouriteProduct.module.css";

export function FavouriteProduct({ product }) {
  return (
    <div className={styles.favouriteProduct}>
      <img src={product.photos[0]} width={85} height={140} />
      <div>
        <h3>
          {product.brand} {product.productName}
        </h3>
        <p className={styles.price}>
          Cena: <span>{product.pricePLN} zł</span>
        </p>
        <div className={styles.btnWrapper}>
          <button className={styles.delete}>Usuń</button>
          <button className={styles.add}>Dodaj do koszyka</button>
        </div>
      </div>
      <p className={styles.rightPrice}>{product.pricePLN} zł</p>
    </div>
  );
}
