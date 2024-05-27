# Frontend Mentor - Intro component with sign up form solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./images/readme-image.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [View webpage](https://omowunmikamil.github.io/intro-component-with-signup/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learned to replicate the error states using Javascript.
Add an eyes icon on the password input to toggle the password between visible and invisible
And how to make the website responsive on all screen using less CSS  snytax

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
<div class="field-group">
  <label for="password"></label>
  <img src="images/icon-error.svg" class="error-icon" alt="error image">
  <input type="password" class="password" id="password" name="password" placeholder="Password" />
  <i class="fa-regular fa-eye" id="show-pass"></i>
  <p class="error-text">Password cannot be empty</p>
</div>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
.error-text, .error-icon {
  display: none;
}

.field-group {
  position: relative;
}

.field-group.error .error-text, .field-group.error .error-icon {
  display: block;
}
.fa-eye {
  position: absolute;
  right: 4%;
  top: 22px;
}

.fa-eye-slash {
  position: absolute;
  right: 4%;
  top: 22px;
}

.field-group.error input {
  border: 1px solid var(--red);
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
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
```

### Useful resources

- [Fontawesome](fontawesome.com) - This helped provide me with free eye icons for my project. I really liked this pattern and will use it going forward.

## Author

- Website - [Visit my Portfolio Website](https://omowunmikamil.tech)
- Frontend Mentor - [Omowunmi Kamiludeen](https://www.frontendmentor.io/profile/Omowunmikamil)
- Twitter - [Browser_Nerd](https://www.twitter.com/@Browser_Nerd)

## Acknowledgments

Frontend Mentor - For providing this awesome challenge to help me improve my skills
Samadeen Momoh Abdulsamad - for providing access to the code base.
