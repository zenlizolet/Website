// This file is responsible for fetching and displaying the current user's information and reservation data.
//set the body id, used for styling
document.body.setAttribute('id', "user__body");
let mainElement = document.querySelector('main');

async function fetchReservation() {
    try {
        const response = await fetch('api/reserve');
        const reservation = await response.json();
        return reservation;
    }
    catch (error) {
        console.error('Error fetching reservation data', error);
        return null; // returning null instead of an empty array
    }
}

// Fetch user info from the API
fetch('/api/current-user')
    .then(response => response.json())
    .then(user => {
        // This file is responsible for fetching and displaying the current user's information
        console.log(user);

        // Extract user information from the user object
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
        fullNameElement.textContent = "Welcome " + first_name + " " +last_name + "!";
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
        fetchReservation()
            .then(reservation => {
                console.log('Reservation:', reservation); // Log the reservation data to check its content
                if (reservation) {
                    var reservation_id = reservation.user_id; // This seems incorrect, should it be reservation_id instead of user_id?
                    var book_id = reservation.book_id;

                    const reservationIdElement = document.createElement('p');
                    reservationIdElement.textContent = "Reservation ID: " + reservation_id;
                    reservationIdElement.classList.add('reservation-id');
                    mainElement.appendChild(reservationIdElement);

                    const bookIdElement = document.createElement('p');
                    bookIdElement.textContent = "Book ID: " + book_id;
                    bookIdElement.classList.add('book-id');
                    mainElement.appendChild(bookIdElement);
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
