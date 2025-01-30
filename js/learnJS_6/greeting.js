const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const greetingMsg = document.getElementById("greetingMsg");

greetBtn.addEventListener("click", function () {
  const name = nameInput.value;
  if (name) {
    greetingMsg.textContent = `Hello, ${name} Welcome to JS!`;
  } else {
    greetingMsg.textContent = "Please enter your name!";
  }
});
