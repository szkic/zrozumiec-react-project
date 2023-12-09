import { Link, useFetcher } from "react-router-dom";
import styles from "./Product.module.css";

const ENDPOINT_TO_PATH_MAPPING = {
  men: "mezczyzna",
  women: "kobieta",
  children: "dziecko",
};

export function Product({ product }) {
  const { Form } = useFetcher();

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
      <Form
        onClick={(e) => e.stopPropagation()}
        method="POST"
        action={`/add-to-favourites/${product.id}`}
      >
        <button>
          <div className={styles.heart}></div>
        </button>
      </Form>
    </Link>
  );
}
