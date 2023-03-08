export const renderComm = (data) => {
  const container = document.querySelector('.comment-container');
  container.innerHTML = '';
  console.log(data);

  Object.values(data).forEach((item) => {
    const comm = document.createElement('div');

    comm.classList.add('comment');
    comm.innerHTML = `
      <p class="name">${item.name}</p>
      <p class="comment-text">${item.comm}</p>
      <p class="date-info"><span class="date">${item.date}</span>, <span class="time">${item.time}</span> </p>
      <div class="comment-buttons">
        <button class="like-btn"></button>
        <button class="delete-btn"></button>
      </div>
    `;
    container.append(comm);
  });
}