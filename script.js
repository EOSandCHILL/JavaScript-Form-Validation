// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.querySelector("#form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password-confirmation");
const termsInput = document.querySelector("#terms");
const errorsContainer = document.querySelector(".errors");
const errorsList = document.querySelector(".errors-list");
// const formGroup = document.querySelectorAll(".form-group");

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
form.addEventListener("submit", (e) => {
  //    TODO: Create an array to store all error messages and clear any old error messages
  const errorMessages = [];
  clearErrors();
  //    TODO: Define the following validation checks with appropriate error messages
  //      1. Ensure the username is at least 6 characters long
  if (usernameInput.value.length < 6) {
    errorMessages.push("Username must be at least 6 characters");
  }
  //      2. Ensure the password is at least 10 characters long
  if (passwordInput.value.length < 10) {
    errorMessages.push("Password must be at least 10 characters");
  }
  //      3. Ensure the password and confirmation password match
  if (passwordConfirmInput.value !== passwordInput.value) {
    errorMessages.push("Passwords must match");
  }
  //      4. Ensure the terms checkbox is checked
  if (!termsInput.checked) {
    errorMessages.push("Please read and agree to terms");
  }
  //    TODO: If there are any errors then prevent the form from submitting and show the error messages
  if (errorMessages.length > 0) {
    e.preventDefault();
    showErrors(errorMessages);
  }
  console.log(errorMessages);
});

// TODO: Define this function
function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  // errorsList.innerHTML = '' or
  while (errorsList.children[0] != null) {
    errorsList.removeChild(errorsList.children[0]);
  }
  // Remove the show class to the errors container
  errorsContainer.classList.remove("show");
}

// TODO: Define this function
function showErrors(errorMessages) {
  // Add each error to the error-list element
  errorMessages.forEach((errorMessage) => {
    // Make sure to use an li as the element for each error
    const li = document.createElement("li");
    li.innerText = errorMessage;
    errorsList.appendChild(li);
  });
  // Also, make sure you add the show class to the errors container
  errorsContainer.classList.add("show");
}
