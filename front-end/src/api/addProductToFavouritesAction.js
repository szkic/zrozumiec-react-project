import { BACKEND_URL } from "../constants/api";

export function addProductToFavouritesAction({ params: { productId } }) {
  return fetch(`${BACKEND_URL}/favourites`, {
    method: "POST",
    body: JSON.stringify({
      productId: Number(productId),
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
}
