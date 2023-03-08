import { postData } from "./postData.js";
import { getData } from './getData.js';
import { renderComm } from "./renderComm.js";

const form = document.querySelector('.form');
const submitBtn = form.querySelector('.form__btn');
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const time = `${hours}:${minutes}`

const resetForm = () => {
  form.name.value = '';
  form.comment.value = '';
  form.date.value = '';
}

submitBtn.addEventListener('click', () => {
  event.preventDefault();

  const comment = {
    id: 1,
    name: form.name.value,
    comm: form.comment.value,
    date: form.date.value,
    time: time,
    isLike: false,
  }

  postData(comment);
  resetForm();
});

getData();
