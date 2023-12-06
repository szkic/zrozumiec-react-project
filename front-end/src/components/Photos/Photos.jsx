import { useState } from "react";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import styles from "./Photos.module.css";

export function Photos({ product }) {
  const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);

  return (
    <FlexContainer>
      <div className={styles.thumbnails}>
        {product.photos.map((photo) => (
          <img
            src={photo}
            key={photo}
            onClick={() => setCurrentPhoto(photo)}
            className={photo === currentPhoto ? styles.active : ""}
          />
        ))}
      </div>
      <img src={currentPhoto} width={500} height={700} />
    </FlexContainer>
  );
}
