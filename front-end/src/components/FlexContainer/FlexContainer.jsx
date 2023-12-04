import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./FlexContainer.module.css";

export function FlexContainer({ children }) {
  return (
    <CenteredContent>
      <div className={styles.flexContainer}>{children}</div>
    </CenteredContent>
  );
}
