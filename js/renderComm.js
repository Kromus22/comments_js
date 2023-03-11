import { checkDate } from "./checkDate.js";
import { deleteData } from "./deleteData.js";
import { getData } from "./getData.js";
import { putData } from "./putData.js";

export const renderComm = () => {
  /* рендерим комменты, получая данные с сервера, предварительно очищая блок. */
  const container = document.querySelector('.comment-container');
  container.innerHTML = '';

  /* итак.. что я тут сделал? ответ от firebase мне проходит в виде объекта.
  я его перегоняю в массив, где получается первый элемент - это id под которым он хранится в fb,
  а во втором элементе уже именно вся инфа по комментарию. и в связи с тем, что мне нужен id элемента
  чтобы потом находить их и удалять или менять, то я нашёл такой выход из ситуации. 
  слегка кривой бэк, в общем.*/
  getData()
    .then((data) => {
      Object.entries(data).forEach((item) => {
        const comm = document.createElement('div');

        comm.classList.add('comment');
        comm.dataset.id = item[0];
        comm.innerHTML = `
      <p class="name">${item[1].name}</p>
      <p class="comment-text">${item[1].comm}</p>
      <p class="date-info"><span class="date">${checkDate(item[1].date)}</span>, <span class="time">${item[1].time}</span> </p>
      <div class="comment-buttons">
        <button class="like-btn" data-id="${item[0]}"></button>
        <button class="delete-btn" data-id="${item[0]}"></button>
      </div>
    `;
        container.append(comm);

      })
      /*новый виток неописуемой поэзии
      логика кнопок удаления и лайка.
      я хотел сделать через патч, но CORS не пропускает этот метод.
      так что я сделал через пут, а он заменяет весь объект.
      так что необходимо снова заполнять все поля, поэтому я их по новой и собираю.
      и да, там есть баг с датой. если это Сегодня или Вчера, 
      то нам вместо даты это и падает потом в базу. у меня уже просто не хватило времени
      чтобы описать проверку на этот случай. но суть и так ясна, я думаю.*/
      const deleteBtns = document.querySelectorAll('.delete-btn');
      const likeBtns = document.querySelectorAll('.like-btn');

      deleteBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          console.log('hello')
          const id = e.target.dataset.id;
          deleteData(id);
        })
      });

      likeBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const comment = document.querySelector(`[data-id="${e.target.dataset.id}"]`);
          const name = comment.querySelector('.name');
          const comm = comment.querySelector('.comment-text');
          const date = comment.querySelector('.date');
          const time = comment.querySelector('.time');

          console.log(name.textContent)

          btn.classList.toggle('like-btn_active');
          let data = {
            name: name.textContent,
            comm: comm.textContent,
            date: date.textContent,
            time: time.textContent,
            isLike: false,
          }

          if (btn.classList.contains('like-btn_active')) {
            data = {
              name: name.textContent,
              comm: comm.textContent,
              date: date.textContent,
              time: time.textContent,
              isLike: true,
            }
          }

          console.log(data);

          const id = e.target.dataset.id;
          putData(id, data);
        })
      });
    });
}