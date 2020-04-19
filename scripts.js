const btnSubmit = document.querySelector("button[type='submit']");
const inputs = document.querySelectorAll("input");
const errors = document.querySelectorAll(".error");
const dangerFirstname = document.querySelector("#danger-firstname");
const dangerLastname = document.querySelector("#danger-lastname");
const dangerEmail = document.querySelector("#danger-email");
const dangerPassword = document.querySelector("#danger-password");

function validateEmail(_email) {
  const RE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return RE.test
}

btnSubmit.addEventListener("click", (e) => {
  // Input element
  const firstname = inputs[0];
  const lastname = inputs[1];
  const email = inputs[2];
  const password = inputs[3];

  // Error element
  const errFirstname = errors[0];
  const errLastname = errors[1];
  const errEmail = errors[2];
  const errPassword = errors[3];
  
  // Warning firstname
  if (firstname.value === "" || firstname.value === null) {
    firstname.style.border = "2px solid var(--red)";
    firstname.style.marginBottom = "0.5rem";
    firstname.placeholder = "";
    errFirstname.innerHTML = "First Name cannot be empty";
    dangerFirstname.style.visibility = "visible"
  }

  // Warning lastname
  if (lastname.value === "" || lastname.value === null) {
    lastname.style.border = "2px solid var(--red)";
    lastname.style.marginBottom = "0.5rem";
    lastname.placeholder = "";
    errLastname.innerHTML = "Last Name cannot be empty";
    dangerLastname.style.visibility = "visible"
  }

  // Warning email
  if (validateEmail(email.value)) {
    email.style.border = "2px solid var(--red)";
    email.style.marginBottom = "0.5rem";
    errEmail.innerHTML = "Looks like this is not an email";
    email.style.color = "var(--red)";
    dangerEmail.style.visibility = "visible"
  }

  // Warning Password
  if (password.value === "" || password.value === null) {
    password.style.border = "2px solid var(--red)";
    password.style.marginBottom = "0.5rem";
    password.placeholder = "";
    errPassword.innerHTML = "Password cannot be empty";
    dangerPassword.style.visibility = "visible"
  }

  e.preventDefault();
});