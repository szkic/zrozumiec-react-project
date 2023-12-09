import style from "./Details.module.css";
import RETURN_ICON from "../../assets/return.svg";
import CAR_ICON from "../../assets/car.svg";
import { FullWidthButton } from "../../components/FullWidthButton/FullWidthButton";
import { Accordion } from "../Accordion/Accordion";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Details({ product }) {
  const [, addProductToCard] = useContext(CartContext);

  const accordionContent = [
    {
      title: "Opis produktu",
      content: product.description,
    },
    {
      title: "Wskazówki pielęgnacyjne",
      content: product.maintenanceInfo,
    },
  ];

  return (
    <div className={style.details}>
      <h2>{product.brand}</h2>
      <p className={style.productName}>{product.productName}</p>
      <p className={style.price}>{product.pricePLN} zł</p>

      <FullWidthButton onClick={() => addProductToCard(product)} isBlack={true}>
        Dodaj do koszyka
      </FullWidthButton>

      <ul className={style.extraInfo}>
        <li>
          <img src={CAR_ICON} />
          Dostawa do 24h
        </li>
        <li>
          <img src={RETURN_ICON} />
          Zwrot do 100 dni!
        </li>
      </ul>

      <Accordion items={accordionContent} />
    </div>
  );
}
