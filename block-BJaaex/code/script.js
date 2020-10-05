// Variations -
// Match 2/4/8
// Choice of icons

const memoryGame = () => {
  // Create the starting layout
  let body = document.body;
  const createLayout = () => {

    // Container
    let container = document.createElement("div");
    container.classList.add("container");
    body.append(container);

    // Title

    let h1 = document.createElement("h1");
    h1.innerText = "Flip Out";
    container.append(h1);

    // Gameplay Information
    let gameBar = document.createElement("section");
    container.append(gameBar);
    gameBar.style.fontSize = "2rem";
    gameBar.style.fontWeight = "700";
    gameBar.style.display = "flex";
    gameBar.style.justifyContent = "space-between";
    gameBar.style.margin = "1rem 0 2rem 0";

    let moves = document.createElement("div");
    let moveCount = 0;
    moves.innerText = `${moveCount} Moves`;
    let gameTime = document.createElement("div");
    gameTime.innerText = "Time";
    let reset = document.createElement("button");
    reset.innerText = "Reset";
    gameBar.append(moves, gameTime, reset);

    // Boxes wrapper
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    container.append(wrapper);
    wrapper.style.display = "grid";
    wrapper.style.gridTemplateColumns = "repeat(4, 1fr)";
    wrapper.style.gridGap = "1.5rem";

    // A standard box template (not added to the DOM)
    let box = document.createElement("div");
    box.style.backgroundColor = "var(--Navy)";
    box.style.padding = "2rem 1rem";
    box.style.textAlign = "center";
    box.style.fontSize = "3rem";
    box.style.fontWeight = "700";
    box.style.boxShadow = "0px 0px 5px 0.2px black";
    box.style.color = "#ecf0f1";
    box.style.transition = "rotateY(180deg)";

    box.classList.add("box");

    // content
    content = {
      brands: [
        "gitkraken",
        "github",
        "gitlab",
        "firefox-browser",
        "fort-awesome",
        "keybase",
        "napster",
        "meetup",
        "reddit",
        "product-hunt",
        "slack",
        "sketch",
        "trello",
        "twitter",
        "whatsapp",
        "youtube",
        "discord",
        "git",
        "figma",
        "fonticons",
      ],
      js: [
        "js",
        "grunt",
        "gulp",
        "npm",
        "node-js",
        "react",
        "vuejs",
        "jsfiddle",
      ],
      coding: [
        "rust",
        "sass",
        "js",
        "php",
        "raspberry-pi",
        "markdown",
        "erlang",
        "css3-alt",
        "python",
        "html5",
        "java",
        "bootstrap",
        "laravel",
        "less",
      ],
    };

    // filling the content inside the boxes randomly
    let newArr = [...content.brands];
    let reducedContentArr = [];
    while (reducedContentArr.length < 8) {
      let random1 = Math.floor(Math.random() * 20);
      if (newArr[random1]) {
        reducedContentArr.push(newArr[random1]);
      }
      delete newArr[random1];
    }

    // Doubling the content
    reducedContentArr = reducedContentArr.concat(reducedContentArr);

    // Randomize the array
    // console.log(reducedContentArr);
    let randomizedReduced = [];
    let n = reducedContentArr.length;
    while (randomizedReduced.length < reducedContentArr.length) {
      let rando = Math.floor(Math.random() * n);
      if (reducedContentArr[rando]) {
        randomizedReduced.push(reducedContentArr[rando]);
      }
      delete reducedContentArr[rando];
    }
    // console.log(reducedContentArr);
    // console.log(randomizedReduced);

    // Adding the boxes
    for (let i = 1; i <= 16; i++) {
      let clonedBox = box.cloneNode(true);
      wrapper.append(clonedBox);
      clonedBox.classList.add(`box${i}`);

      clonedBox.innerHTML = `<i class='fab fa-${
        randomizedReduced[i - 1]
      } fa-shadow'></i>`;
      // All cards start hidden
      // clonedBox.children[0].style.visibility = "hidden";
    }
  };
  createLayout();

  // Logic
  let wrapper = document.querySelector(".wrapper");
  let activeBoxes = 0;
  let boxesExamined = [];

  // Handling box matching
  const boxMatching = (box) => {
    boxesExamined.push(box.classList[1]);
    let boxA = document.querySelector(`.${boxesExamined[0]}`);
    let boxB = document.querySelector(`.${boxesExamined[1]}`);
    if(boxA === boxB) return;
    if(activeBoxes == 2) {
      // moveCount = moveCount + 2;
      // moves.innerText = `${moveCount} moves`;
      // Also ensure against matching with self
      if (boxA.innerHTML === boxB.innerHTML) {
          boxA.style.backgroundColor = "green";
          boxB.style.backgroundColor = "green";
          activeBoxes = 0;
          boxesExamined = [];
        } else {
          boxA.style.backgroundColor = "red";
          boxB.style.backgroundColor = "red";
          setTimeout(function() {
            boxA.children[0].style.visibility = "hidden";
            boxB.children[0].style.visibility = "hidden";
            boxA.style.backgroundColor = "var(--Navy)";
            boxB.style.backgroundColor = "var(--Navy)";
            activeBoxes = 0;
            boxesExamined = [];
          }, 1000);
        }
      }
  }

    // Checking if the game is over
    const checkCompletion = () => {
      let allBoxes = [...document.querySelectorAll(".box")];
      if (allBoxes.every((box) => box.style.backgroundColor === "green")) {
        console.log("You won");
        let overlay = document.createElement("section");
        overlay.style.position = "absolute";
        overlay.style.height = "100vh";
        overlay.style.width = "100vw";
        overlay.style.bakckgroundColor = "#272727";
        overlay.style.opacity = "60%";
        let modal = document.createElement("section");
        modal.innerHTML = "<p>You Won.</p>"
        modal.style.opacity = "100%";
        modal.style.backgroundColor = "white";
        overlay.append(modal);
        body.append(overlay);
      }
    };

  // Handling click
  const handleClick = (e) => {
    if (activeBoxes == 2) return;
    if (
      [...e.target.classList].includes("box") ||
      [...e.target.parentElement.classList].includes("box")
    ) {


      let box = e.target;
      if ([...e.target.parentElement.classList].includes("box")) {
        box = e.target.parentElement;
      }
        // box.style = "transform: rotateY(180deg); transition: visibility 1s";
        box.children[0].style.visibility = "visible";
        box.style.transition = "rotateY(180deg)"
        ++activeBoxes;
      boxMatching(box);
    }
    checkCompletion();
  }
  wrapper.addEventListener('click', handleClick);





  // Clock should run for the extent of the game
  // Clicks should be counted
  // Star rating should be provided for gameplay
}

memoryGame();



