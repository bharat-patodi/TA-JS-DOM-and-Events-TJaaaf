(function () {
  let ul = document.querySelector(".movie-watch-list__list");
  let movieInput = document.querySelector('input[name="movie-input"]');
  let footer = document.querySelector("footer");
  let filters = document.getElementById("filters");
  // State of my app
  let countActive = 0;
  let state = localStorage.state ? JSON.parse(localStorage.state) : [];
  console.log(state);
  function createUI() {
    ul.innerHTML = "";
    state.forEach((val) => {
      let li = document.createElement("li");
      ul.append(li);
      li.classList.add("movie-watch-list__list-item");
      li.innerHTML = `<i class="far fa-check-circle"></i>${val.todo}<i class="far fa-times-circle"></i>`;
      if (!val.isActive) {
        li.style = "text-decoration: line-through; color: #aaaaaa";
        li.children[0].style = "color: #82c91e";
        // removeActive(e);
      }
      if (val.isRemoved) {
        li.style.display = "none";
      }
      countAllActive();
    });
  }
  createUI();

  movieInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13 && movieInput.value !== "") {
      event.preventDefault();
      insertListItem();
      movieInput.value = "";
    }
  });

  // Handling clicks on the app
  ul.addEventListener("click", (e) => {
    // Handling clicks on the complete button
    if ([...e.target.classList].includes("fa-check-circle")) {
      e.target.parentElement.style =
        "text-decoration: line-through; color: #aaaaaa";
      e.target.style = "color: #82c91e";
      removeActive(e);
      countAllActive();
    }
    // Handling clicks on the close button
    if ([...e.target.classList].includes("fa-times-circle")) {
      e.target.parentElement.style.display = "none";
      removeCompleted(e);
      countAllActive();
    }
  });

  // Handling clicks on the filters
  filters.addEventListener("click", (j) => {
    // Handling clicks on the 'All' button
    if (j.target.id === "show-all") {
      ul.innerHTML = "";
      state.forEach((val) => {
        let li = document.createElement("li");
        ul.append(li);
        li.classList.add("movie-watch-list__list-item");
        li.innerHTML = `<i class="far fa-check-circle"></i>${val.todo}<i class="far fa-times-circle"></i>`;
        if (val.isActive == false) {
          li.style = "text-decoration: line-through; color: #aaaaaa";
          li.children[0].style = "color: #82c91e";
        }
        if (val.isRemoved == true) {
          li.style.display = "none";
        }
      });
      localStorage.setItem("state", JSON.stringify(state));
    }
    // Handling clicks on the 'Active' button
    if (j.target.id === "show-active") {
      ul.innerHTML = "";
      state.forEach((val) => {
        if (val.isActive == true) {
          let li = document.createElement("li");
          ul.append(li);
          li.classList.add("movie-watch-list__list-item");
          li.innerHTML = `<i class="far fa-check-circle"></i>${val.todo}<i class="far fa-times-circle"></i>`;
        }
      });
      localStorage.setItem("state", JSON.stringify(state));
    }
    // Handling clicks on the 'Completed' button
    if (j.target.id === "show-completed") {
      ul.innerHTML = "";
      state.forEach((val) => {
        if (val.isActive == false && val.isRemoved == false) {
          let li = document.createElement("li");
          ul.append(li);
          li.classList.add("movie-watch-list__list-item");
          li.innerHTML = `<i class="far fa-check-circle"></i>${val.todo}<i class="far fa-times-circle"></i>`;
          li.style = "text-decoration: line-through; color: #aaaaaa";
          li.children[0].style = "color: #82c91e";
        }
      });
      localStorage.setItem("state", JSON.stringify(state));
    }
    // Handling clicks on the 'Clear Completed' button
    if (j.target.id === "clear-completed") {
      state.forEach((val) => {
        ul.innerHTML = "";
        let li = document.createElement("li");
        ul.append(li);
        li.classList.add("movie-watch-list__list-item");
        li.innerHTML = `<i class="far fa-check-circle"></i>${val.todo}<i class="far fa-times-circle"></i>`;
        if (val.isActive === false) {
          val.isRemoved = true;
          li.style.display = "none";
        }
      });
      localStorage.setItem("state", JSON.stringify(state));
    }
  });

  function insertListItem() {
    let li = document.createElement("li");
    ul.append(li);
    li.classList.add("movie-watch-list__list-item");
    li.innerHTML = `<i class="far fa-check-circle"></i>${movieInput.value}<i class="far fa-times-circle"></i>`;
    state.push({ todo: movieInput.value, isActive: true, isRemoved: false });
    localStorage.setItem("state", JSON.stringify(state));
    countAllActive();
  }

  function removeCompleted(event) {
    state.forEach((val, index) => {
      if (val.todo === event.target.parentElement.innerText) {
        state[index].isActive = false;
        state[index].isRemoved = true;
        localStorage.setItem("state", JSON.stringify(state));
      }
    });
  }

  function removeActive(event) {
    state.forEach((val, index) => {
      if (val.todo === event.target.parentElement.innerText) {
        state[index].isActive = false;
        localStorage.setItem("state", JSON.stringify(state));
      }
    });
  }

  function countAllActive() {
    countActive = state.reduce((acc, curr) => (curr.isActive ? ++acc : acc), 0);
    footer.querySelector("li").innerText = `${countActive} elements left`;
  }
})();
