import { NavLink } from "react-router-dom";
import styles from "./MainMenu.module.css";
import { GENDERS } from "../../constants/categories";

export function MainMenu() {
  return (
    <>
      <ul className={styles.list}>
        {GENDERS.map(({ categoryName, path }) => (
          <li key={path} className={styles.listEl}>
            <NavLink to={path}>{categoryName}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
