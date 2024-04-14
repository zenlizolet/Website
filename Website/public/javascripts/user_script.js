// This file, user_script.js, is responsible for fetching and displaying the current user's information and reservation data.
// It fetches the user's information from the '/api/current-user' endpoint and displays it on the page.
// The user's information includes their user ID, name, address, postcode, telephone number, date of birth, subscription type, payment method, and username.
// It also fetches the user's reservation data from the '/api/reserve' endpoint and displays the reservation ID and book ID.
// If there is an error during the fetch requests, it logs the error to the console.
// The user's information and reservation data are fetched and displayed when the window loads.

//set the body id, used for styling
document.body.setAttribute('id', "user__body");
let mainElement = document.querySelector('main');

/*this is the script for the user page. It displays the information and their reservations*/

// Fetch user info from the API
fetch('/api/current-user')
    .then(response => response.json())
    .then(user => {
        // This file is responsible for fetching and displaying the current user's information
        console.log(user);

        // Extract user information from the user object
        console.log('User:', user);

        var user_id = user.user_id;
        var first_name = user.name;
        var last_name = user.last_name;
        var address = user.address;
        var postcode = user.postcode;
        var telephone_number = user.telephone_number;
        var date_of_birth = user.date_of_birth;
        var subscription_type = user.subscription_type;
        var payment_method = user.payment_method;
        var username = user.username;

        // Create elements to display user info
        const usernameElement = document.createElement('h1');
        mainElement.appendChild(usernameElement);
        const fillertext = document.createElement('p');

        usernameElement.textContent = username;
        const fullNameElement = document.createElement('p');
        fullNameElement.textContent = "Welcome " + first_name + " " + last_name + "!";
        fullNameElement.classList.add('full-name');
        mainElement.appendChild(fullNameElement);

        const userIdElement = document.createElement('p');
        userIdElement.textContent = "User ID: " + user_id;
        userIdElement.classList.add('user-id');
        mainElement.appendChild(userIdElement);

        const securityElement = document.createElement('p');
        securityElement.textContent = "Oops, secure 9000";
        securityElement.classList.add('security-text');
        mainElement.appendChild(securityElement);


        const addressElement = document.createElement('p');
        addressElement.textContent = "Address: " +address;
        mainElement.appendChild(addressElement);

        const postcodeElement = document.createElement('p');
        postcodeElement.textContent = "Postcode: " + postcode;
        mainElement.appendChild(postcodeElement);

        const telephoneElement = document.createElement('p');
        telephoneElement.textContent = "Telephone Number: " + telephone_number;
        mainElement.appendChild(telephoneElement);

        const dobElement = document.createElement('p');
        dobElement.textContent = "Date of Birth: " + date_of_birth;
        mainElement.appendChild(dobElement);

        const subscriptionElement = document.createElement('p');
        subscriptionElement.textContent = "Subscription Type: " +subscription_type;
        mainElement.appendChild(subscriptionElement);

        const paymentElement = document.createElement('p');
        paymentElement.textContent = "Payment Method: " +payment_method;
        mainElement.appendChild(paymentElement);

        fillertext.textContent = "Here you can find the information of your reservations";
        fillertext.classList.add('filler-text');
        mainElement.appendChild(fillertext);
        // Fetch reservation info
        fetch('api/user-reservations')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(reservations => {
                console.log('Reservations:', reservations);

                if (reservations && reservations.length > 0) {


                    reservations.forEach(reservation => {
                        var reservation_id = reservation.reservation_id;
                        var book_title = reservation.title; // Access the book_title property
                    
                        const reservationIdElement = document.createElement('p');
                        reservationIdElement.textContent = "Reservation ID: " + reservation_id;
                        reservationIdElement.classList.add('reservation-id');
                        mainElement.appendChild(reservationIdElement);
                    
                        const bookIdElement = document.createElement('p');
                        bookIdElement.textContent = "Book Title: " + book_title; // Display book title
                        bookIdElement.classList.add('book-id');
                        mainElement.appendChild(bookIdElement);                    
                    });
                } else {
                    console.log('No reservation data available');
                }
            })
            .catch(error => {
                console.error('Error fetching reservation info:', error);
            });
    })
    .catch(error => {
        console.error('Error fetching user info:', error);
    });
