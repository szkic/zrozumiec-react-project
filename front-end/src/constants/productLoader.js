import { BACKEND_URL } from "./api";

export function productLoader({ params: { productId } }) {
  return fetch(`${BACKEND_URL}/products/${productId}`);
}
