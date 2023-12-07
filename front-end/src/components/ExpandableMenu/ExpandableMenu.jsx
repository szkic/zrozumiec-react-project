import styles from "./ExpandableMenu.module.css";
import ARROW_ICON from "../../assets/arrow.svg";
import { CATEGORIES } from "../../constants/categories";
import { NavLink, useParams } from "react-router-dom";
import { PATH_TO_GENDER_NAME } from "../../constants/api";

export function ExpandableMenu() {
  const params = useParams();

  return (
    <div className={styles.expandableMenu}>
      <p>{PATH_TO_GENDER_NAME[params.gender]}</p>
      <ul>
        {CATEGORIES.map((category) => (
          <li key={category.path}>
            <NavLink to={`/${params.gender}/${category.path}`}>
              {category.categoryName}
              <img
                src={ARROW_ICON}
                className={
                  params.category === category.path ? styles.expanded : ""
                }
              />
            </NavLink>
            {params.category === category.path && (
              <ul>
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory.path}>
                    <NavLink
                      to={`/${params.gender}/${category.path}/${subcategory.path}`}
                    >
                      {subcategory.categoryName}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
