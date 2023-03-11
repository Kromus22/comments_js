export const validation = () => {
  const name = document.querySelector('#name');
  const comm = document.querySelector('#comment');
  const nameError = document.querySelector('.name-error');
  const commentError = document.querySelector('.comment-error');
  const formBtn = document.querySelector('.form__btn');
  const form = document.querySelector('.form');

  form.addEventListener('input', () => {
    if (name.value.length === 0 || comm.value.length === 0) {
      formBtn.disabled = true
    } else {
      formBtn.disabled = false
    }
  });

  name.addEventListener('input', () => {
    if (!name.value) {
      nameError.style.display = "block";
    } else {
      nameError.style.display = "none";
    }
  });

  comm.addEventListener('input', () => {
    if (!comm.value) {
      commentError.style.display = "block";
    } else {
      commentError.style.display = "none";
    }
  });
}
/*Максимально простая валидация. выводится сообщение над полем ввода, если оно пустое.
кнопка отправки заблокирована пока необходимые поля пусты*/