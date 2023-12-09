import { useLoaderData } from "react-router-dom";
import { FavouritesList } from "../../components/FavouritesList/FavouritesList";

export function Favourites() {
  const products = useLoaderData();

  return <FavouritesList products={products} />;
}
