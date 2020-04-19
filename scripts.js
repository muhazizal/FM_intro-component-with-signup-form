const btnSubmit = document.querySelector("button[type='submit']");
const inputs = document.querySelectorAll("input");
const form = document.querySelector("#claim-form");

btnSubmit.addEventListener("click", (e) => {
  // Input element
  const firstname = inputs[0];
  const lastname = inputs[1];
  const email = inputs[2];
  const password = inputs[3];
  
  // Node and text
  const node = document.createElement("p");
  const warningFirstname = document.createTextNode("First Name cannot be empty");
  const warningLastname = document.createTextNode("Last Name cannot be empty");
  const warningEmail = document.createTextNode("Looks like this is not an email");
  const warningPassword = document.createTextNode("Password cannot be empty");

  if (firstname.value === '' || firstname.value === null) {
    node.appendChild(warningFirstname);
    form.insertBefore(node, form.childNodes[8]);
  }

  e.preventDefault();
});