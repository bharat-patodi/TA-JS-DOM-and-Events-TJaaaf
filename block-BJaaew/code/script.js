
// Data modified
let arrayOfPersons = got.houses.reduce((acc, curr) => {
    acc.push(curr.people);
    return acc;
  }, []).flat();

// For styling the header
let body = document.querySelector("body");
body.style.margin = "0";
let header = document.querySelector("header");
header.innerHTML = "<h1>People of GOT</h1>";
header.style.textAlign = "center";
header.style.backgroundColor = "#4075d5";
header.style.padding = "0.5rem";
header.style.color = "white";

// The container
let main = document.querySelector("main");
let container = document.createElement("div");
main.append(container);
main.style.backgroundColor = "#f4f5f9";
container.style.maxWidth = "1400px";
container.style.padding = "1rem 2rem";
container.style.margin = "0 auto";

// Filters - Design
let filters = document.createElement("section");
container.append(filters);
filters.classList.add("filters");
got.houses.forEach(val => {
    let button = document.createElement("button");
    button.classList.add(`btn`, `btn-house`, `${val.name}`);
    button.innerText = val.name;
    filters.append(button);
});

// Normal Search Bar
let searchBar = document.createElement("section");
searchBar.classList.add("search-bar")
container.append(searchBar);
let searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("placeholder", "Name e.g. Jon");
searchInput.classList.add("search");
searchBar.append(searchInput);

// Description Search Bar
let descriptionSearchInput = document.createElement("input");
descriptionSearchInput.setAttribute("type", "text");
descriptionSearchInput.setAttribute("placeholder", "Description e.g. wolf OR warden");
descriptionSearchInput.classList.add("search");
searchBar.append(descriptionSearchInput);

// All books display section
let peopleSection = document.createElement("section");
container.append(peopleSection);
peopleSection.classList.add("people-list");
peopleSection.style.display = "grid";
peopleSection.style.gridTemplateColumns =
  "repeat(auto-fit, minmax(350px, 1fr))";
peopleSection.style.gridGap = "20px";

// Reset function
const reset = () => {
    peopleSection.innerHTML = "";
    Array.from(document.getElementsByClassName("search")).forEach(val => val.value = "");
}

// A single person display function
const displayPerson = (person) => {
    let character = document.createElement("article");
    let charIntro = document.createElement("div");
    let charImage = document.createElement("img");
    let charTitle = document.createElement("h2");
    charIntro.append(charImage, charTitle);
    let charDesc = document.createElement("p");
    let charButton = document.createElement("a");
    character.style.textAlign = "center";
    character.style.backgroundColor = "white";
    character.style.padding = "2rem";
    character.style.borderRadius = "5px";
    character.style.boxShadow = "3px 5px 5px 5px #ccc";

    character.append(charIntro, charDesc, charButton);
    peopleSection.append(character);

    charIntro.style.display = "flex";
    charImage.src = person.image;
    charImage.style.width = "25%";
    charImage.style.height = "25%";
    charImage.style.borderRadius = "50%";
    charImage.style.border = "3px solid teal";
    charImage.alt = "GOT character";
    charImage.style.marginRight = "1rem";
    charTitle.style.fontWeight = "700";
    charDesc.style.marginBottom = "20px";
    charButton.style.display = "block";

    // Filling in the values
    charTitle.innerText = person.name;
    charDesc.innerText = person.description;
    charButton.style.padding = "0.5rem 1rem";
    charButton.style.backgroundColor = "#e7edfd";
    charButton.style.color = "#4075d5";
    charButton.style.fontWeight = "700";
    charButton.style.borderRadius = "5px";
    charButton.innerText = "Learn More!";
}

// All the people
got.houses.forEach((house) => {
  house.people.forEach((person) => {
    displayPerson(person);
  });
});

// Filter functionality
const filterByHouse = (event) => {
    if ([...event.target.classList].includes("btn")) {
        reset();
        got.houses.forEach(val => {
            if(val.name === event.target.innerText) {
                val.people.forEach((person) => {
                displayPerson(person);
                });
            }
        })
    };
};
filters.addEventListener("click", filterByHouse);

// Search Name Functionality
const searchPerson = () => {
    console.log(searchInput.value);
    peopleSection.innerHTML = "";
    arrayOfPersons.forEach(val => {
        if(val.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
            displayPerson(val);
        }
    })
};

searchInput.addEventListener("input", searchPerson);

// Search Description Functionality
const searchDescription = () => {
    console.log(descriptionSearchInput.value);
    peopleSection.innerHTML = "";
    arrayOfPersons.forEach(val => {
        if(val.description.toLowerCase().includes(descriptionSearchInput.value.toLowerCase())) {
            displayPerson(val);
        }
    })
};

descriptionSearchInput.addEventListener("input", searchDescription);