import { redirect } from "react-router-dom";
import { BACKEND_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api";

export function mainPageLoader({ params }) {
  const backToEndPath = PATH_TO_ENDPOINT_MAPPING[params.gender];

  if (backToEndPath) {
    return fetch(`${BACKEND_URL}/${backToEndPath}`);
  } else {
    return redirect("/kobieta ");
  }
}
