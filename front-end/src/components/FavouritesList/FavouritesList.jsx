import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import styles from "./FavouritesList.module.css";

export function FavouritesList({ products }) {
  return (
    <CenteredContent>
      <div className={styles.favouritesListContainer}>
        <h2>Ulubione</h2>
        <div>
          {products.map((product) => (
            <FavouriteProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </CenteredContent>
  );
}
