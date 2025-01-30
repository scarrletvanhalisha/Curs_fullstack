let count = 0;
const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("incrementBtn");

incrementButton.addEventListener("click", function () {
  count++;
  countDisplay.textContent = count;
});
