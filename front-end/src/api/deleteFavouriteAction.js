import { BACKEND_URL } from "../constants/api";

export function deleteFavouriteAction({ params }) {
  return fetch(`${BACKEND_URL}/favourites/${params.favouriteId}`, {
    method: "DELETE",
  });
}
