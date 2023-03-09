export const checkDate = (date) => {
  /*получаем дату комментария и текущую дату. форматируем их в необходимый вид.
  а именно: отсекаем лишнее от текущей даты. сравниваем их, если даты одинаковые, то это сегодня
  для сравнения под ВЧЕРА сводим их в формат милисекунд, прибавляем к дате коммента 1 день и сравниваем */

  const dateNow = new Date();
  let dayOfMonth = dateNow.getDate();
  let month = dateNow.getMonth() + 1;
  const year = dateNow.getFullYear();

  const dateComm = new Date(date);
  const yesterday = dateComm.setDate(dateComm.getDate() + 1)

  month = month < 10 ? '0' + month : month;
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;

  const formatDateNow = `${month}.${dayOfMonth}.${year}`;
  const dateNowForm = new Date(formatDateNow);
  const dateNowMs = dateNowForm.setDate(dateNowForm.getDate())

  if (formatDateNow == date) {
    return 'Сегодня';
  } else if (dateNowMs == yesterday) {
    return 'Вчера';
  } else {
    return date;
  }
}

