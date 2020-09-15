let body = document.body;
let boxes = document.querySelector(".boxes");

for (let i = 0; i < 500; i++) {
  let box = document.createElement("div");
  boxes.append(box);
  box.innerText = "Hi";
  box.classList.add("box");
}

let myBoxes = document.querySelectorAll(".box");

myBoxes.forEach((baux) => {
  baux.addEventListener("mousemove", function () {
    myBoxes.forEach((val) => {
      val.style.backgroundColor = `rgb(${Math.random() * 256}, ${
        Math.random() * 256
      }, ${Math.random() * 256})`;
      val.innerText = Math.floor(Math.random() * 500);
    });
  });
});
