function submitData(name, email) {
  const newUser = {
    name: name,
    email: email,
  };
  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newUser),
  };
  return fetch("http://localhost:3000/users", configObject)
    .then((res) => res.json())
    .then((data) => {
      document.body.innerHTML += data.id;
      console.log(data);
    })
    .catch((error) => {
      document.body.innerHTML += error.message;
    });
}
