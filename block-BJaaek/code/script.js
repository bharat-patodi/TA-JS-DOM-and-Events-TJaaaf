// Selecting the boxes
let firstBox = document.querySelector(".first");
let secondBox = document.querySelector(".second");

// Attaching event listeners
firstBox.addEventListener("click", function () {
  firstBox.style.backgroundColor = `rgb(${Math.random() * 256}, ${
    Math.random() * 256
  }, ${Math.random() * 256})`;
  console.log("ckick");
});

secondBox.addEventListener("mousemove", function () {
  secondBox.style.backgroundColor = `rgb(${Math.random() * 256}, ${
    Math.random() * 256
  }, ${Math.random() * 256})`;
  console.log("mouse move");
});

const randomColor = () => {
  let randomNum = Math.random();
  console.log(randomNum);
};

randomColor();
/*
000000
000001
16*16*16*16*16*16




*/
