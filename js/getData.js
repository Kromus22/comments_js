import { URI_API } from "./consts.js";

/*я добавляю строку '.json' в запросах, чтобы не ловить ошибку CORS
иначе просто не работает. я нашёл лишь такое решение.*/
export const getData = () => {
  return fetch(URI_API + '.json')
    .then(req => {
      return req.json()
    })
    .catch((err) => {
      console.log(err);
    })
}
