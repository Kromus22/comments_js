import postData from "./postData.js";

const form = document.querySelector('.form');
const submitBtn = form.querySelector('.form__btn');

const name = form.name.value
console.log(name);

submitBtn.addEventListener('click', () => {
  event.preventDefault();
  console.log(name);
});
