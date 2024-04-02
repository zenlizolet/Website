// Set the body id, used for styling
document.body.setAttribute('id', 'login__body');

//clear the main element when changing the page
function clearMain() {
    const main = document.querySelector('main');
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

// Function to be called on load
function login() {
    clearMain();
    // Select the main element
    const main = document.querySelector('main');
    main.setAttribute('id', 'login__main');

    // Create form container
    const formContainer = document.createElement('div');
    formContainer.setAttribute('class', 'login__container');

    // Create h1 element
    const h1 = document.createElement('h1');
    h1.textContent = 'Login';
    h1.setAttribute('class', 'login__title');
    formContainer.appendChild(h1);

    // Create form
    const form = document.createElement('form');

    // Create username input
    const usernameInput = document.createElement('input');
    usernameInput.classList.add('login__input');
    usernameInput.type = 'text';
    usernameInput.placeholder = 'Username';
    usernameInput.required = true;
    usernameInput.setAttribute('aria-label', 'Username');

    // Create password input
    const passwordInput = document.createElement('input');
    passwordInput.classList.add('login__input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    passwordInput.required = true;
    passwordInput.setAttribute('aria-label', 'Password');

    // Create submit button
    const submitButton = document.createElement('button');
    submitButton.classList.add('login__submit');
    submitButton.type = 'submit';
    submitButton.textContent = 'Login';

    // Append inputs and button to the form
    form.appendChild(usernameInput);
    form.appendChild(passwordInput);
    form.appendChild(submitButton);

    // Append form to the form container
    formContainer.appendChild(form);

    // Append form container to the main element
    main.appendChild(formContainer);

    // Add event listener to the form
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle form submission here
    });

    // Create account section
    const accountSection = document.createElement('div');
    accountSection.setAttribute('class', 'login__account');

    // Create account text
    const accountText = document.createElement('p');
    accountText.textContent = 'Don\'t have an account?';

    // Create create account button
    const createAccountButton = document.createElement('button');
    createAccountButton.classList.add('login__create-account');
    createAccountButton.textContent = 'Create Account';

    // Append account text and button to the account section
    accountSection.appendChild(accountText);
    accountSection.appendChild(createAccountButton);
    
    // Append account section to the main element
    main.appendChild(accountSection);

    // Add event listener to the create account button
    createAccountButton.addEventListener('click', signup);
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const username = usernameInput.value;
        const password = passwordInput.value;
    
        fetch('/backend/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            // Verwerk de serverrespons hier. Bijvoorbeeld, als de inlogpoging succesvol was, kunt u de gebruiker doorsturen naar een andere pagina.
        })
        .catch(error => {
            // Verwerk eventuele fouten hier
        });
    });
}

// Function to be called for signup
function signup() {
    clearMain();
    // Select the main element
    const main = document.querySelector('main');
    main.innerHTML = '';

    // Create form container
    const formContainer = document.createElement('div');
    formContainer.setAttribute('class', 'login__container');

    // Create h1 element for sign up
    const signUpTitle = document.createElement('h1');
    signUpTitle.textContent = 'Sign Up';
    signUpTitle.setAttribute('class', 'signup__title');
    formContainer.appendChild(signUpTitle);

    // Create form for sign up
    const signUpForm = document.createElement('form');

    // Create email input
    const emailInput = document.createElement('input');
    emailInput.classList.add('login__input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Email';
    emailInput.required = true;
    emailInput.setAttribute('aria-label', 'Email');
    signUpForm.appendChild(emailInput);

    // Create password input
    const passwordInput = document.createElement('input');
    passwordInput.classList.add('login__input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    passwordInput.required = true;
    passwordInput.setAttribute('aria-label', 'Password');
    signUpForm.appendChild(passwordInput);

    // Create confirm password input
    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.classList.add('login__input');
    confirmPasswordInput.type = 'password';
    confirmPasswordInput.placeholder = 'Confirm Password';
    confirmPasswordInput.required = true;
    confirmPasswordInput.setAttribute('aria-label', 'Confirm Password');
    signUpForm.appendChild(confirmPasswordInput);

    // Create submit button for sign up
    const signUpButton = document.createElement('button');
    signUpButton.classList.add('signup__submit');
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

    // Create login section
    const loginSection = document.createElement('div');
    loginSection.setAttribute('class', 'signup__account');

    // Create login text
    const loginText = document.createElement('p');
    loginText.textContent = 'Already have an account?';

    // Create login button
    const loginButton = document.createElement('button');
    loginButton.classList.add('signup__login-button');
    loginButton.textContent = 'Login';

    // Append login text and button to the login section
    loginSection.appendChild(loginText);
    loginSection.appendChild(loginButton);

    // Append login section to the main element
    main.appendChild(loginSection);

    // Add event listener to the login button
    loginButton.addEventListener('click', login);
}



// Call the login function on load
window.addEventListener('load', login);