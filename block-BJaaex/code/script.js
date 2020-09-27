
const createLayout = () => {
  let body = document.body;

  // Container
  let container = document.createElement("div");
  container.classList.add("container");
  body.append(container);

  // Title

  let h1 = document.createElement("h1");
  h1.innerText = "Flip Out";
  container.append(h1);

  // Boxes wrapper
  let wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  container.append(wrapper);
  wrapper.style.display = "grid";
  wrapper.style.gridTemplateColumns = "repeat(4, 1fr)";
  wrapper.style.gridGap = "1.5rem";

  // A standard box template (not added to the DOM)
  let box = document.createElement("div");
  box.innerText = "Yo";
  box.style.backgroundColor = "var(--Navy)";
  box.style.padding = "2rem 1rem";
  box.style.textAlign = "center";
  box.style.fontSize = "3rem";
  box.style.fontWeight = "700";
  box.style.boxShadow = "0px 0px 5px 0.2px black";
  box.style.color = "#ecf0f1";
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
    js: ["js", "grunt", "gulp", "npm", "node-js", "react", "vuejs", "jsfiddle"],
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
  };

  // Doubling the content
  reducedContentArr = reducedContentArr.concat(reducedContentArr);

  // Randomize the array
  console.log(reducedContentArr);
  let randomizedReduced = [];
  let n = reducedContentArr.length;
  while(randomizedReduced.length < reducedContentArr.length) {
      let rando = Math.floor(Math.random() * n);
      if (reducedContentArr[rando]) {
          randomizedReduced.push(reducedContentArr[rando]);
      };
      delete reducedContentArr[rando];
  }
  console.log(reducedContentArr);
  console.log(randomizedReduced);


  // Adding the boxes
  for (let i = 1; i <= 16; i++) {
    let clonedBox = box.cloneNode(true);
    wrapper.append(clonedBox);
    clonedBox.classList.add(`box${i}`);

    clonedBox.innerHTML = `<i class='fab fa-${
      randomizedReduced[i-1]
    } fa-shadow'></i>`;
  }
}

createLayout();
