const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const inputs = form.querySelectorAll('input');
const showPass = document.querySelector('#show-pass');
const passwordField = document.querySelector('#password');


console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
  } else {
    firstName.classList.remove('error');
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
  } else {
    lastName.classList.remove('error');
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
  } else {
    password.classList.remove('error');
  }

  // Check if all fields are valid
  inputs.forEach((input) => {
    if (!input.value) {
      input.parentElement.classList.add('error');
    } else {
      input.parentElement.classList.remove('error');
      if (input.type == 'email') {
        if (!validateEmail(input.value)) {
          input.parentElement.classList.add('error');
        } else {
          input.parentElement.classList.remove('error');
        }
      }
    }
  })

  // Show password
  showPass.addEventListener('click', function() {
    // Toggle the icon class
    this.classList.toggle("fa-eye-slash");
    this.classList.toggle("fa-eye");

    // Toggle the password field type
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
  });

  // Optional: Initial setup to show the correct icon based on the initial state
  if (passwordField.getAttribute("type") === "password") {
    showPass.classList.add("fa-eye");
    
  } else {
    showPass.classList.add("fa-eye-slash");
  }
});



//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

