const bcrypt = require("bcrypt");
const saltRounds = 10;
// const plainTextPassword1 = "DFGh5546*%^__90";

// create a new password
function getPasswordHash(password) {
  bcrypt
    .hash(password, saltRounds)
    .then((hash) => {
      console.log(`Hash: ${hash}`);
      // Store hash in your password DB.
      return hash;
    })
    .catch((err) => console.error(err.message));
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  const passwordHash = "";

  if (username && email && password) {

    const response = await fetch("/api/users", {

    //passwordHash = getPasswordHash(password);
    //const response = await fetch("/api/userAuth", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        passwordHash,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);
