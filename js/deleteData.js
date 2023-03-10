import { URI_API } from "./consts.js";


export const deleteData = (path) => {
  return fetch(URI_API + path + '.json', {
    method: 'delete'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error
      }
      return response.json()
    });
}