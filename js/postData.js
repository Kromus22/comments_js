import { URI_API } from "./consts.js";
import { renderComm } from "./renderComm.js";

export const postData = (comment) => {
  /*вероятно я сделал как-то странно и криво. но сработало только так.
  после отправки нового коммента, в конце принудительно вызывается новый запрос на сервер
  чтобы прилетели новые данные и снова отрендерелись*/
  return fetch(URI_API + '.json', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(comment),

  })
    /*и тут ререндер после отправки нового коммента тоже не срабатывает.
    вроде переиграл себя в асинхрон, но это не точно*/
    .then(response => response.json())
    .then(renderComm());
}