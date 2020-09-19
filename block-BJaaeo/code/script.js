let form = document.querySelector("form");
let display = document.querySelector(".display");
let firstNum = 0;
let secondNum = 0;
let operator = "";

// Logic
const calculate = (event) => {
  if (Array.from(event.target.classList).includes("action")) {
    let val = event.target.value;
    switch (val) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
      case "00":
        display.value += val;
        break;
      case "C":
        display.value = "";
        break;
      case "+":
        firstNum = display.value;
        console.log(firstNum);
        display.value = "";
        operator = "+";
        break;
      case "-":
        firstNum = display.value;
        display.value = "";
        operator = "-";
        break;
      case "*":
        firstNum = display.value;
        display.value = "";
        operator = "*";
        break;
      case "/":
        firstNum = display.value;
        display.value = "";
        operator = "/";
        break;
      case "%":
        firstNum = display.value;
        display.value = "";
        operator = "%";
        break;
      case "=":
        secondNum = display.value;
        display.value = eval(`${firstNum}${operator}${secondNum}`);
        break;
    }
  }
};

// Add event listeners to the form
form.addEventListener("click", calculate);
