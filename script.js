const submitButton = document.getElementById("submit");
const modal = document.getElementById("modalId");
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
