const getData = () => {
  return fetch('https://comms-a33ce-default-rtdb.firebaseio.com/comments')
    .then(req => req.json())
    .catch(error => ({ error }))
}

export default getData;