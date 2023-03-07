const postData = (comment) => {
  return fetch('https://comments-99745-default-rtdb.europe-west1.firebasedatabase.app/comments.json', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': "POST, GET, OPTIONS, DELETE, PUT",
      'Access-Control-Allow-Headers': "append, delete, entries, foreach, get, has, keys, set, values, Authorization",
    },
    body: JSON.stringify(comment),

  })
    .then(response => response.json());
}

export default postData;