import { NavLink, useParams } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";
import styles from "./Breadcrumbs.module.css";
import { CATEGORIES, GENDERS } from "../../constants/categories";

export function Breadcrumbs() {
  const { gender, category, subcategory } = useParams();

  const findGender = GENDERS.find((g) => g.path === gender);
  const findCategory = CATEGORIES.find((c) => c.path === category);

  const breadcrumbs = [
    {
      categoryName: findGender.categoryName,
      path: `/${findGender.path}`,
    },
    {
      categoryName: findCategory.categoryName,
      path: `/${findGender.path}/${findCategory.path}`,
    },
  ];

  if (subcategory) {
    const findSubcategory = findCategory.subcategories.find(
      (sc) => sc.path === subcategory
    );

    breadcrumbs.push({
      categoryName: findSubcategory.categoryName,
      path: `/${findGender.path}/${findCategory.path}/${findSubcategory.path}`,
    });
  }

  return (
    <ul className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb) => (
        <li key={breadcrumb.path}>
          <NavLink end to={breadcrumb.path}>
            {breadcrumb.categoryName}
            <img src={ARROW_ICON} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
