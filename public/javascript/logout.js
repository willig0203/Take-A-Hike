async function logoutFormHandler(event) {
  event.preventDefault();

  const response = await fetch("/api/userAuth/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".logout-form")
  .addEventListener("submit", logoutFormHandler);
