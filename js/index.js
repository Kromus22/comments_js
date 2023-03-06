import postData from "./postData.js";
import getData from './getData.js';

const form = document.querySelector('.form');
const submitBtn = form.querySelector('.form__btn');

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
    isLike: false,
  }

  console.log(comment);
  postData(comment);
  resetForm();
});

getData();