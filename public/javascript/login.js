// check password
const bcrypt = require("bcrypt");
// const hash = "$2b$10$69SrwAoAUNC5F.gtLEvrNON6VQ5EX89vNqLEqU655Oy9PeT/HRM/a";

function checkPassword(password) {
  bcrypt
    .compare(password, hash)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.error(err.message));
}

async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();


  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',

  //if (email && password && checkPassword(password)) {
    //const response = await fetch("/api/userAuth/login", {
      //method: "post",
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

