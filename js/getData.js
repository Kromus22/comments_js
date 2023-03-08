import { renderComm } from "./renderComm.js";
import { URI_API } from "./consts.js";

export const getData = () => {
  fetch(URI_API)
    .then(req => req.json())
    .then(data => {
      renderComm(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    })
}
