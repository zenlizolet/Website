let pageIndex = 0;
const booksPerPage = 9;

// Set the body id, used for styling
document.body.setAttribute('id', 'catalog__body');

const main = document.querySelector('main');
main.setAttribute('id', 'catalog__main');

const catalogContainer = document.createElement('div');
catalogContainer.setAttribute('class', 'catalog__container');

const logo = document.createElement('img');
logo.src = '/books/GotBooks.png';
logo.setAttribute('class', 'catalog__logo');
catalogContainer.appendChild(logo);

const title = document.createElement('h1');
title.textContent = 'The best selection of fantasy books! Click on a book to see more information.';
title.setAttribute('class', 'catalog__title');
catalogContainer.appendChild(title);

const book__container = document.createElement('div');
book__container.setAttribute('id', 'book__container');
catalogContainer.appendChild(book__container);

async function fetchBooks() {
    try {
        const response = await fetch('/api/books');
        const books = await response.json();
        return books;
    } catch (error) {
        console.error('Error fetching book data:', error);
        return [];
    }
}

async function fetchUserId() {
    try {
        const response = await fetch('/api/current-user');
        const user = await response.json();
        console.log(user);
        return user;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return [];
    }
}

async function displayBooks(){
    books = await fetchBooks();
    user = await fetchUserId();
    book__container.innerHTML = "";
    for (let i = pageIndex; i < Math.min(pageIndex + booksPerPage, books.length); i++) {
        const book = books[i];
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const img = document.createElement('img');
        img.src = book.image;
        img.alt = book.title;
        bookDiv.appendChild(img);

        const title = document.createElement('p');
        title.textContent = book.title;
        bookDiv.appendChild(title);

        const summary = document.createElement('p');
        summary.textContent = book.content;
        summary.classList.add('summary');
        bookDiv.appendChild(summary);


        const reserveButton = document.createElement('button');
        reserveButton.textContent = 'Reserve';
        reserveButton.addEventListener('click', async function(event) {
            event.preventDefault();

            if (confirm(`Reserve this book: ${book.title}`)) {
                // check if user is logged in PLACED HERE
                const user_id = user.user_id
                const title = book.title;

                const requestBody = {
                    user_id: user_id,
                    title: title
                };

                try {
                    const response = await fetch('api/reserve', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(requestBody)
                    });

                   // const data = await response.json();

                    if (!response.ok) {
                        throw new Error('Failed to reserve the book cattest');
                    }
        
                    alert('Reserved!');

                    } catch (error) {
                      console.error('Error:', error);
                      alert('failed to reserve the book. please try again later.')
                    }

               // window.location.href = '../public/reserve.html?book=' + book.title;

            }
            else {
                console.log('Operation cancelled');
            }
        });
        bookDiv.appendChild(reserveButton);

        img.addEventListener('click', () => {
            createModal(book); // Pass the entire book object
            document.getElementById('bookModal').style.display = "block";
        });

        book__container.appendChild(bookDiv);
    }
}

function createModal(book) {
    const modal = document.createElement('div');
    modal.setAttribute('id', 'bookModal');
    modal.setAttribute('class', 'modal');

    const modalContent = document.createElement('div');
    modalContent.setAttribute('class', 'modal-content');

    const closeButton = document.createElement('span');
    closeButton.setAttribute('class', 'close');
    closeButton.textContent = '\u00D7';

    closeButton.onclick = function() {
        modal.style.display = "none";
        document.body.removeChild(modal); // Remove the modal from the body
    }

    const bookTitle = document.createElement('h2');
    bookTitle.textContent = book.title;

    const bookImage = document.createElement('img');
    bookImage.src = book.image;
    bookImage.alt = book.title;

    const bookContent = document.createElement('p');
    bookContent.setAttribute('id', 'bookContent');
    bookContent.textContent = book.content;

    const reserveButton = document.createElement('button');
    reserveButton.textContent = 'Reserve';
    reserveButton.addEventListener('click', () => {
        if (confirm(`Reserve this book: ${book.title}`)) {
            window.location.href = '../public/reserve.html?book=' + encodeURIComponent(book.title);
        }
        else {
            console.log('Operation cancelled');
        }
    });

    // Append elements to their parents
    modalContent.appendChild(closeButton);
    modalContent.appendChild(bookTitle);
    modalContent.appendChild(bookImage);
    modalContent.appendChild(bookContent);
    modalContent.appendChild(reserveButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.removeChild(modal); // Remove the modal from the body
        }
    });
}

// Navigation bar for the catalog
const navbarButtons = document.createElement('div');
navbarButtons.setAttribute('class', 'navbar__buttons');

const prevButton = document.createElement('button');
prevButton.textContent = '←';
prevButton.addEventListener('click', lastPageDisplay);
prevButton.addEventListener("click", () => {
    if (pageIndex - booksPerPage >= 0) {
        pageIndex -= booksPerPage;
        displayBooks();
    }
});

const nextButton = document.createElement('button');
nextButton.textContent = '→';
nextButton.addEventListener('click', nextPageDisplay);
nextButton.addEventListener("click", () => {
    if (pageIndex + booksPerPage < books.length) {
        pageIndex += booksPerPage;
        displayBooks();
    }
});

let page = 1;

const pageDisplay = document.createElement('p');
pageDisplay.id = 'page-display';
pageDisplay.textContent = `Page ${page}`;

function lastPageDisplay() {
    if (page > 1) {
    page--;
    pageDisplay.textContent = `Page ${page}`;
    }

}
function nextPageDisplay() {
    if (page < 6) {
        page++;
        pageDisplay.textContent = `Page ${page}`;
    }
}

navbarButtons.appendChild(prevButton);
navbarButtons.appendChild(pageDisplay);
navbarButtons.appendChild(nextButton);
catalogContainer.appendChild(navbarButtons);
main.appendChild(catalogContainer);


// Call the loadCatalog function on load
window.addEventListener('load', displayBooks);
