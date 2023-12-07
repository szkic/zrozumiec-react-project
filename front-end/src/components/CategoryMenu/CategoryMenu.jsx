import { NavLink, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";
import styles from "./CategoryMenu.module.css";

export function CategoryMenu() {
  const params = useParams();

  return (
    <div className={styles.categoryMenu}>
      <ul>
        {CATEGORIES.map(({ categoryName, path }) => (
          <li key={path}>
            <NavLink to={`${params.gender}/${path}`}>{categoryName}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
