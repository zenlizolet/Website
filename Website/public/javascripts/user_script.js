//set the body id, used for styling
document.body.setAttribute('id', "user__body");
let mainElement = document.querySelector('main');

/*this is the script for the user page. It displays the information and their reservations*/

// Fetch user info from the API
fetch('/api/current-user')
    .then(response => response.json())
    .then(user => {
        console.log('User:', user);

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
                        var book_title = reservation.title;

                        const reservationIdElement = document.createElement('p');
                        reservationIdElement.textContent = "Reservation ID: " + reservation_id;
                        reservationIdElement.classList.add('reservation-id');
                        mainElement.appendChild(reservationIdElement);

                        const bookIdElement = document.createElement('p');
                        bookIdElement.textContent = "Book ID: " + book_title;
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
