import { Outlet } from "react-router-dom";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { Footer } from "../Footer/Footer";
import { IconMenu } from "../IconMenu/IconMenu";
import { Logo } from "../Logo/Logo";
import { MainContent } from "../MainConten/MainContent";
import { MainMenu } from "../MainMenu/MainMenu";
import { TopBar } from "../TopBar/TopBar";
import { CurrencyContext } from "../../contexts/currencyContext";
import { useState } from "react";
import { CURRENCIES } from "../../constants/currencies";
import { CartContext } from "../../contexts/CartContext";

export function Layout() {
  const [currency, setCurrency] = useState(
    localStorage.getItem("selected-currency") || CURRENCIES.PLN
  );
  const [cartItems, setCartItems] = useState(() => {
    return localStorage["cart_products"]
      ? JSON.parse(localStorage["cart_products"])
      : [];
  });

  function addProductToCard(product) {
    setCartItems((prevCartItems) => {
      const newState = [...prevCartItems, product];
      localStorage["cart_products"] = JSON.stringify(newState);

      return newState;
    });
  }

  return (
    <>
      <CurrencyContext.Provider value={[currency, setCurrency]}>
        <CartContext.Provider value={[cartItems, addProductToCard]}>
          <MainContent>
            <TopBar>
              <MainMenu />
              <Logo />
              <div>
                <CurrencySelector />
                <IconMenu />
              </div>
            </TopBar>
            <CategoryMenu />
            <Outlet />
          </MainContent>
          <Footer />
        </CartContext.Provider>
      </CurrencyContext.Provider>
    </>
  );
}
