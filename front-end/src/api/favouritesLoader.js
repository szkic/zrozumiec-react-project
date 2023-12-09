import { BACKEND_URL } from "../constants/api";

export function favouritesLoader() {
  return fetch(`${BACKEND_URL}/favourites?_expand=product`);
}
