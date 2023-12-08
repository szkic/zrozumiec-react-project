import { Link } from "react-router-dom";
import styles from "./Product.module.css";

export function Product({ product }) {
  const ENDPOINT_TO_PATH_MAPPING = {
    men: "mezczyzna",
    women: "kobieta",
    children: "dziecko",
  };

  return (
    <Link
      className={styles.product}
      to={`/${ENDPOINT_TO_PATH_MAPPING[product.gender]}/${product.category}/${
        product.subcategory
      }/${product.id}`}
    >
      <img src={product.photos[0]} />
      <h3>{product.productName}</h3>
      <p>{product.pricePLN} zł</p>
      <div className={styles.heart}></div>
    </Link>
  );
}
