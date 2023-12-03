import { NavLink } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";
import styles from "./CategoryMenu.module.css";

export function CategoryMenu() {
  return (
    <div className={styles.categoryMenu}>
      <ul>
        {CATEGORIES.map(({ categoryName, path }) => (
          <li key={path}>
            <NavLink to={path}>{categoryName}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
