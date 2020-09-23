let form = document.querySelector("form");

let userInfo = {};

function showError(inputName, errorText) {
  let errorDisplay = document.createElement('small');
  if(inputName.nextSibling) {
    inputName.nextSibling.remove();
  } // For removing any already existing error statements
  inputName.parentElement.classList.remove("success");
  inputName.parentElement.classList.add("error");
  inputName.insertAdjacentElement('afterend', errorDisplay);
  errorDisplay.innerText = errorText;
  // BUG: The success class doesn't get removed for any later testing for errors.
}

function showSuccess(inputName) {
  if (inputName.nextSibling) {
    inputName.nextSibling.remove();
  } // For removing any already existing error statements
  inputName.parentElement.classList.add("success");
  inputName.parentElement.classList.remove("error");
}

function handleSubmit(event) {
  event.preventDefault();

  // Handling the username field
  let username = form.elements.username;
  if (username.value.length < 4) {
    showError(username, `username cannot be less than 4 characters`);
  } else {
    showSuccess(username);
  }

  // Handling the name field

  let name = form.elements.name;
  if (name.value.split("").some(val => Number(val))) {
    showError(name, `You can't use number in the name field`);
  } else {
    showSuccess(name);
  }

  // Handling the email field

  let email = form.elements.email;

  if (!email.value.includes("@")) {
    showError(email, `Not a valid email`);
  } else if (email.value.length < 6) {
    showError(email, 'Email cannot be less than 6 characters');
  } else {
    showSuccess(email);
  }

  // Handling the phone field

  let phone = form.elements.phone;

  if (!phone.value.split("").every(val => Number(val))) {
    showError(phone, `Phone number can only contain numbers`);
  } else if (phone.value.length < 7) {
    showError(phone, `Phone number cannot be less than 7 characters`);
  } else {
    showSuccess(phone);
  }

  // Handling the password field

  let password = form.elements.password;

  if (!password.value.split("").some(val => Number(val)) && (!password.value.split("").some(val => (val === '$' || val === '@')))) {
    showError(password, `Password must contain at least a symbol and a number`);
  } else {
    showSuccess(password);
  }

  // Handling the confirm password field

  let confirmPassword = form.elements.confirmpassword;

  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, `The two password values do not match`);
  } else {
    showSuccess(confirmPassword);
  }

  // Handling the empty fields

  let submit = form.elements.submit;

  let notEmpty = (username.value && name.value && email.value && phone.value && password.value && confirmPassword.value);

  let emptyElement = [...form.elements][[...form.elements].map(val => val.value).indexOf("")].name;

  if (!notEmpty) {
    showError(submit, `${emptyElement} is empty`);
  } else {
      if (submit.nextSibling) {
        submit.nextSibling.remove();
      }
  }


  userInfo.name = form.elements.name.value;
  userInfo.username = form.elements.username.value;
  userInfo.email = form.elements.email.value;
  userInfo.phone = form.elements.phone.value;
  userInfo.password = form.elements.password.value;
  userInfo.confirmPassword = form.elements.confirmpassword.value;

  // send data to server
  let allClear = [...form.elements].splice(0,6).reduce((acc, curr) => {
    return acc && Boolean([...curr.parentElement.classList].includes('success'));
  }, true);

  if(allClear) {
    alert("🤍 User Added Succesfully 🤍");
    console.log(userInfo);
  }
}

form.addEventListener("submit", handleSubmit);
