const getData = () => {
  return fetch('https://comments-99745-default-rtdb.europe-west1.firebasedatabase.app/comments.json')
    .then(req => req.json())
    .catch(error => ({ error }))
}

export default getData;