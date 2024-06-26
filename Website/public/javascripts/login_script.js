// This file, login_script.js, is responsible for handling the user login process.
// It creates a login form with fields for the user's name and password.
// When the form is submitted, it sends a POST request to the '/api/login' endpoint with the user's input.
// If the login is successful, it stores the user's information in the session storage and redirects the user to the 'user.html' page.
// If the login fails, it displays an error message to the user.
// The login form is created when the window loads.
// If the URL includes a 'book' parameter, it alerts the user to log in to reserve the specified book.

// Set the body id, used for styling
document.body.setAttribute('id', 'login__body');

async function loginUser() {
    const main = document.querySelector('main');
    main.setAttribute('id', 'login__main');

    const formContainer = document.createElement('div');
    formContainer.setAttribute('class', 'form__container');

    const loginTitle = document.createElement('h1');
    loginTitle.textContent = 'Log In';
    loginTitle.setAttribute('class', 'login__title');
    formContainer.appendChild(loginTitle);

    const loginForm = document.createElement('form');

    const nameInput = document.createElement('input');
    nameInput.classList.add('form__input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Name';
    nameInput.required = true;
    nameInput.setAttribute('aria-label', 'Name');
    loginForm.appendChild(nameInput);

    const passwordInput = document.createElement('input');
    passwordInput.classList.add('form__input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    passwordInput.required = true;
    passwordInput.setAttribute('aria-label', 'Password');
    loginForm.appendChild(passwordInput);

    const loginButton = document.createElement('button');
    loginButton.classList.add('form__submit');
    loginButton.type = 'submit';
    loginButton.textContent = 'Log In';
    loginForm.appendChild(loginButton);

    const loginStatus = document.createElement('p');
    loginStatus.setAttribute('id', 'status__message');
    formContainer.appendChild(loginStatus);

    formContainer.appendChild(loginForm);
    main.appendChild(formContainer);

    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const name = nameInput.value;
        const password = passwordInput.value;

        const requestBody = {
            name: name,
            password: password
        };

        try {
            const response = await fetch('api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            const data = await response.json();

            if (data.success) {
                sessionStorage.setItem('user', JSON.stringify(data.user));

                loginStatus.textContent = `Logged in as ${data.user.name}`;
                var oldNavBar = document.querySelector('nav');
                oldNavBar.parentNode.removeChild(oldNavBar);
                createNavBar();

                window.location.href = 'user.html';
            } else {
                const errorMessage = document.createElement('p');
                errorMessage.textContent = 'Login failed: ' + data.error;
                errorMessage.setAttribute('class', 'error-message');

                loginStatus.textContent = 'current login status: '+ data.error ;
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });


    const signupLink = document.createElement('p');
    signupLink.textContent = 'No account yet? ';
    const link = document.createElement('a');
    link.href = '/signup.html'; 
    link.textContent = 'Sign up';
    signupLink.appendChild(link);

    // Add the paragraph to the main element
    formContainer.appendChild(signupLink);

    main.appendChild(formContainer);
}

loginUser();

window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const book = urlParams.get('book');
    if (book) {
        alert(`Log in to reserve: ${book}`);
    }
});