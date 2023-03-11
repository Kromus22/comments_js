import { postData } from "./postData.js";
import { getData } from './getData.js';
import { renderComm } from "./renderComm.js";
import { validation } from "./validation.js";

const form = document.querySelector('.form');
const submitBtn = form.querySelector('.form__btn');
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const time = `${hours}:${minutes}`;

validation();

const resetForm = () => {
  //очистка формы
  form.name.value = '';
  form.comment.value = '';
  form.date.value = '';
}

const checkDateValue = (date) => {
  if (!date) {
    const dateNow = new Date();
    let dayOfMonth = dateNow.getDate();
    let month = dateNow.getMonth() + 1;
    const year = dateNow.getFullYear();
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    const formatDateNow = `${month}.${dayOfMonth}.${year}`;

    return formatDateNow;
  }
  return date
}

submitBtn.addEventListener('click', () => {
  //формируем объект из данных формы, который отправляем на сервер, и очищаем форму, после этого.
  event.preventDefault();

  const comment = {
    name: form.name.value,
    comm: form.comment.value,
    date: checkDateValue(),
    time: time,
    isLike: false,
  }

  postData(comment)
    .then(resetForm())
    .then(renderComm());
});


renderComm();

