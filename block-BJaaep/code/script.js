let allBoxes1 = document.querySelectorAll(".box1");
let allBoxes2 = document.querySelectorAll(".boxes");

const showNumber = (event) => {
  if (Array.from(event.target.classList).includes("box")) {
    // When you click on the small boxes it will show the number from 1 to 12
    event.target.innerText = Math.ceil(Math.random() * 12);
    // disappear in next 5 seconds
    setTimeout(() => {
      event.target.innerText = "";
    }, 5000);
  }
};

// Without event delegation
allBoxes1.forEach((box) => {
  box.addEventListener("click", showNumber);
});

// With event delegation
allBoxes2[1].addEventListener("click", showNumber);
