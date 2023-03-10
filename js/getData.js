import { renderComm } from "./renderComm.js";
import { URI_API } from "./consts.js";

export const getData = () => {
  return fetch(URI_API + '.json')
    .then(req => {
      return req.json()
    })
    .catch((err) => {
      console.log(err);
    })
}
