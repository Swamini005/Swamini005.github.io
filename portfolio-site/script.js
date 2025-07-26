function handleSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("responseMsg").textContent = "Thanks for reaching out, " + name + "!";
    document.querySelector("form").reset();
  } else {
    document.getElementById("responseMsg").textContent = "Please fill in all fields.";
  }
}
