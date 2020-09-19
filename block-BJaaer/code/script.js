// Selecting all required elements
let form = document.querySelector("form");
let modal = document.querySelector(".modal");
let modalText = document.querySelector(".modal-text");
let closeModal = document.querySelector(".close");

// Function @name = gatherInfo @param = event
const gatherInfo = (event) => {
  event.preventDefault();

  //   Fetch form data
  let inputName = form.elements.name.value;
  let inputEmail = form.elements.email.value;
  let inputLove = form.elements.love.value;
  let inputColor = form.elements.color.value;
  let inputRating = form.elements.range.value;
  let inputDrone = form.elements.drone.value;
  let inputCheckbox =
    form.elements.terms.checked === true
      ? "👉🏽 You agree to <a>Terms and Conditions</a>"
      : "👉🏽 You don't agree to <a>Terms and Conditions</a>";

  // Display form data in the modal
  modalText.innerHTML = `<h2>Hello ${inputName}</h2>
    <p>Email: ${inputEmail}</p>
    <p>You Love: ${inputLove}</p>
    <p>Color: ${inputColor}</p>
    <p>Rating: ${inputRating}</p>
    <p>Book Genre: ${inputDrone}</p>
    <p>${inputCheckbox}</p>
    `;
  modal.style.display = "flex";
};

// Adding the eventListeners
form.addEventListener("submit", gatherInfo);
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
  console.log("closed");
});
