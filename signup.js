// Set the body id, used for styling
document.body.setAttribute('id', 'signup__body');

//clear the main element when changing the page
function clearMain() {
    const main = document.querySelector('main');
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

// Function to be called for signup
function pageload() {
    clearMain();
    // Select the main element
    const main = document.querySelector('main');
    main.setAttribute('id', 'signup__main');


    // Create form container
    const formContainer = document.createElement('div');
    formContainer.setAttribute('class', 'form__container');

    // Create h1 element for sign up
    const signUpTitle = document.createElement('h1');
    signUpTitle.textContent = 'Sign Up';
    signUpTitle.setAttribute('class', 'signup__title');
    formContainer.appendChild(signUpTitle);

    // Create form for sign up
    const signUpForm = document.createElement('form');

    // Create email input
    const emailInput = document.createElement('input');
    emailInput.classList.add('form__input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Email';
    emailInput.required = true;
    emailInput.setAttribute('aria-label', 'Email');
    signUpForm.appendChild(emailInput);

    // Create password input
    const passwordInput = document.createElement('input');
    passwordInput.classList.add('form__input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    passwordInput.required = true;
    passwordInput.setAttribute('aria-label', 'Password');
    signUpForm.appendChild(passwordInput);

    // Create confirm password input
    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.classList.add('form__input');
    confirmPasswordInput.type = 'password';
    confirmPasswordInput.placeholder = 'Confirm Password';
    confirmPasswordInput.required = true;
    confirmPasswordInput.setAttribute('aria-label', 'Confirm Password');
    signUpForm.appendChild(confirmPasswordInput);

    // Create submit button for sign up
    const signUpButton = document.createElement('button');
    signUpButton.classList.add('form__submit');
    signUpButton.type = 'submit';
    signUpButton.textContent = 'Sign Up';
    signUpForm.appendChild(signUpButton);

    // Append form to the main element
    formContainer.appendChild(signUpForm);
    main.appendChild(formContainer);

    // Add event listener to the sign up form
    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle sign up form submission here
    });
}

// Call the signup function on load
window.addEventListener('load', pageload);