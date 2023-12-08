import { NavLink } from "react-router-dom";
import styles from "./Pagination.module.css";

export function Pagination({ numberOfPages }) {
  const pages = Array(numberOfPages).fill(null);

  return (
    <ul className={styles.pagination}>
      {pages.map((page, index) => (
        <li key={index}>
          <NavLink to={`?page=${index + 1}`}>{index + 1}</NavLink>
        </li>
      ))}
    </ul>
  );
}
