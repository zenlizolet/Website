//set the body id, used for styling
document.body.setAttribute('id', "book_body");
let mainElement = document.querySelector('main');

// Fetch user info from the API
fetch('/api/reserve')
    .then(response => response.json())
    .then(reservation => {
        console.log(reservation);
        var book_id = reservation.book_id;
        var reservation_date = reservation.reservation_date;

        fetch(`/api/books/${book_id}`)
            .then(book => {
                console.log(book)
                var book_title = book.title;
                var book_summary = book.content;// klopt absoluut niet
                var book_image = book.image;


                // Create elements to display user info

                const booktitleElement = document.createElement('h1');
                booktitleElement.textContent - book_title;
                mainElement.appendChild(booktitleElement);

                // Set user info
                const reservationElement = document.createElement('p');
                reservationElement.textContent = "Yay! your reservation on" + reservation_date + " for book:" + book_title + ", has been made!";

                const summaryElement = document.createElement('p');
                summaryElement.textContent = "Summary: " + book_summary; // dit klopt niet
                mainElement.appendChild(summaryElement);

                const imageElement = document.createElement('img');
                imageElement.setAttribute('src', book_image);// dit klopt niet
                imageElement.style.width = '45%';
                mainElement.appendChild(imageElement);

            })
            .catch(error => {
                console.error('Error fetching book info:', error);
            })


    })
    .catch(error => {
        console.error('Error fetching user info:', error);
    });






