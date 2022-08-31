const faceCard = document.querySelector(".cardFace");
const backCard = document.querySelector(".cardBack");
const numberBtn = document.querySelectorAll(".numberButton");
const submitBtn = document.getElementById("submitBtn");
const rateSubmit = document.getElementById("numberSubmitted");
let selectedRating = null;

function handleClickNumberBtn({ target }) {
  removeAllActiveClass();
  target.classList.add("active");
  selectedRating = target.value;
}

function removeAllActiveClass() {
  numberBtn.forEach((button) => button.classList.remove("active"));
}

function handleRatingSubmit() {
  if (!selectedRating) {
    return alert("Please select number rating!");
  }

  rateSubmit.textContent = selectedRating;
  backCard.classList.remove("hidden");
  faceCard.classList.add("hidden");
}

numberBtn.forEach((button) => {
  button.addEventListener("click", handleClickNumberBtn);
});
submitBtn.addEventListener("click", handleRatingSubmit);
