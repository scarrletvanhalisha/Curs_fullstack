const message = document.getElementById("toggleMsg");
const toggleButton = document.getElementById("toggleBtn");

toggleButton.addEventListener("click", function () {
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
});
