// This file, signup_script.js, is responsible for creating and handling the user signup process.
// It creates a signup form with fields for the user's first name, last name, address, postcode, telephone number, date of birth, subscription type, payment method, and password.
// When the form is submitted, it validates the input and sends a POST request to the '/api/signup' endpoint with the user's input.
// If the signup is successful, it displays a success message.
// If the signup fails, it displays an error message.
// The signup form is created when the window loads.

// Set the body id, used for styling
document.body.setAttribute('id', 'signup__body');

function createInputWithLabel(signupForm, labelText, placeholder, type = 'text') {
    const label = document.createElement('label');
    label.textContent = labelText + ': ';
    signupForm.appendChild(label);

    const input = document.createElement('input');
    input.classList.add('form__input');
    input.placeholder = placeholder;
    input.required = true;
    input.type = type;
    input.setAttribute('aria-label', labelText);
    signupForm.appendChild(input);

    // Add a line break for better formatting
    signupForm.appendChild(document.createElement('br'));

    return input;
}


async function signupUser() {
    const main = document.querySelector('main');
    main.setAttribute('id', 'signup__main');

    const formContainer = document.createElement('div');
    formContainer.setAttribute('class', 'form__container');

    const signupTitle = document.createElement('h1');
    signupTitle.textContent = 'Sign Up';
    signupTitle.setAttribute('class', 'signup__title');
    formContainer.appendChild(signupTitle);

    const signupForm = document.createElement('form');

    const nameInput = createInputWithLabel(signupForm, 'First Name', 'Name');
    const lastNameInput = createInputWithLabel(signupForm, 'Last Name', 'Last Name');
    const addressInput = createInputWithLabel(signupForm, 'Address', 'Address');
    const postcodeInput = createInputWithLabel(signupForm, 'Postcode', 'Postcode');
    const telephoneNumberInput = createInputWithLabel(signupForm, 'Telephone Number', 'Telephone Number');
    const dateOfBirthInput = createInputWithLabel(signupForm,'Date of Birth', 'Date of Birth');
    const subscriptionTypeInput = createInputWithLabel(signupForm,'Subscription Type', 'Subscription Type');
    const paymentMethodInput = createInputWithLabel(signupForm,'Payment Method', 'Payment Method');
    const passwordInput = createInputWithLabel(signupForm,'Password', 'Password', 'password');
    const confirmPasswordInput = createInputWithLabel(signupForm,'Confirm Password', 'Confirm Password', 'password');

    const signupButton = document.createElement('button');
    signupButton.classList.add('form__submit');
    signupButton.type = 'submit';
    signupButton.textContent = 'Sign Up';
    signupForm.appendChild(signupButton);

    const signupStatus = document.createElement('p');
    signupStatus.setAttribute('id', 'status__message');
    formContainer.appendChild(signupStatus);


    formContainer.appendChild(signupForm);
    main.appendChild(formContainer);

    signupForm.addEventListener('submit', async function(event) {
        event.preventDefault();
      
        // Get form data
        const name = nameInput.value;
        const lastName = lastNameInput.value;
        const address = addressInput.value;
        const postcode = postcodeInput.value;
        const telephoneNumber = telephoneNumberInput.value;
        const dateOfBirth = dateOfBirthInput.value;
        const subscriptionType = subscriptionTypeInput.value;
        const paymentMethod = paymentMethodInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        // Validate password and confirm password
        if (password !== confirmPassword) {
          signupStatus.textContent = 'Passwords do not match';
          return;
        }
      
        // Create request body
        const requestBody = {
          first_name: name,
          last_name: lastName,
          address: address,
          postcode: postcode,
          telephone_number: telephoneNumber,
          date_of_birth: dateOfBirth,
          subscription_type: subscriptionType,
          payment_method: paymentMethod,
          password: password
        };
      
        // Make POST request to the server
        try {
          const response = await fetch('api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
          });
      
          const data = await response.json();
      
          if (data.success) {
            // Signup was successful
            signupStatus.textContent = 'Signup successful';
          } else {
            // Signup failed
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Signup failed: ' + data.error;
            errorMessage.setAttribute('class', 'error-message');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      });

    const loginLink = document.createElement('p');
    loginLink.textContent = 'Already have an account?  ';
    const link = document.createElement('a');
    link.href = '/login.html';
    link.textContent = 'Log in';
    loginLink.appendChild(link);

    // Add the paragraph to the main element
    formContainer.appendChild(loginLink);

    main.appendChild(formContainer);
}

signupUser();