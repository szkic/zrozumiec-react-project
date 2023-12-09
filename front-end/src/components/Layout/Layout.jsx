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
import { CURRENCIES } from "../../constants/currencies";
import { CartContext } from "../../contexts/CartContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export function Layout() {
  const [currency, setCurrency] = useLocalStorage(
    "selected-currency",
    CURRENCIES.PLN
  );
  const [cartItems, setCartItems] = useLocalStorage("cart_products", []);

  function addProductToCard(product) {
    const newState = [...cartItems, product];
    setCartItems(newState);
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
