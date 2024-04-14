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
        console.log(user);
        var user_id = user.user_id;
        var first_name = user.name;
        var last_name = user.last_name;
        var username = user.username;

        // Create elements to display user info
        const usernameElement = document.createElement('h1');
        usernameElement.textContent = username;
        mainElement.appendChild(usernameElement);

        const fullNameElement = document.createElement('p');
        fullNameElement.textContent = "Welcome " + first_name + " " + last_name + "!";
        fullNameElement.classList.add('full-name');
        mainElement.appendChild(fullNameElement);

        const userIdElement = document.createElement('p');
        userIdElement.textContent = "User ID: " + user_id;
        userIdElement.classList.add('user-id');
        mainElement.appendChild(userIdElement);

        const fillertext = document.createElement('p');
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
