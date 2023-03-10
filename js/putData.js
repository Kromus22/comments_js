import { URI_API } from "./consts.js";

export const putData = (path, data) => {
  return fetch(URI_API + path + '.json', {
    method: 'put',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error
      }
      return response.json()
    });
}